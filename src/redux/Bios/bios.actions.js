import biosTypes from './bios.types';

export const addBioStart = bioData => ({
    type: biosTypes.ADD_NEW_BIO_START,
    payload: bioData
});

export const fetchBiosStart = bioData => ({
    type: biosTypes.FETCH_BIOS_START,
    payload: bioData
});

export const setBio = bio => ({
    type: biosTypes.SET_BIO,
    payload: bio
});
