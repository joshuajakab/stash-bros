import userTypes from './user.types';
import { takeLatest, call, all, put } from 'redux-saga/effects';
import { auth, handleUserProfile, getCurrentUser } from '../../firebase/utils';
import { signInSuccess, signOutUserSuccess, userError } from './user.actions';


export function* getSnapshotFromUserAuth(user, additionalData = {}) {
    yield console.log('made it to snapshot')
    try {
        const userRef = yield call(handleUserProfile, { userAuth: user, additionalData });
        const snapshot = yield userRef.get();
        yield put(
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        );
    } catch (err) {
        console.log(err)
    }
}

export function* emailSignIn({ payload: { email, password } }) {
    try {
        
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)


    } catch (err) {
        //console.log(err)
        alert('Incorrect email or password')
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (err) {
        //console.log(err)
        
    }
}

export function* onCheckUserSession() {
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(
            signOutUserSuccess()
        )
    } catch (err) {
        //console.log(err)
    }
}

export function* onSignOutUserStart() {
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

//export function* signUpUser({ payload: {
//    displayName,
//    email,
//    password,
//    confirmPassword
//} }) {
//    if (password !== confirmPassword) {
//        const err = ['Passwords Don\'t Match'];
//        yield put(
//            userError(err)
//        );
//        return;
//    }
//
//    try {
//
//        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
//        const additionalData = { displayName };
//        yield getSnapshotFromUserAuth(user, additionalData);
//
//
//    } catch (err) {
//        //console.log(err);
//    }
//}


export default function* userSagas() {
    yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart)
    ])
};