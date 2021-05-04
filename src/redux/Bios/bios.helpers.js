import { firestore } from '../../firebase/utils';

export const handleAddBio = bio => {
    console.log(bio)
    return new Promise((resolve, reject) => {
        firestore
            .collection('bios')
            .doc()
            .set(bio)
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    })
};

export const handleFetchBios = () => {
    return new Promise((resolve, reject) => {
        let ref = firestore.collection('bios');
            ref
            .get()
            .then(snapshot => {
                const bioArray = [
                    ...snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            documentID: doc.id
                        }
                    })
                ];

                resolve({
                    bioArray
                });
            })
            .catch(err => {
                reject(err)
            })
    })
};
