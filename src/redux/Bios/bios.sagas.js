import { takeLatest, put, all, call, take } from 'redux-saga/effects';
import { fetchBiosStart, setBio } from './bios.actions';
import { handleAddBio, handleFetchBios } from './bios.helpers';
import biosTypes from './bios.types';

export function* addBio({ payload }) {
    try {
        yield handleAddBio({
            ...payload
        });
        
    } catch (err) {
        console.log(err)
    }
}

export function* onAddBioStart() {
    yield takeLatest(biosTypes.ADD_NEW_BIO_START, addBio)
}

export function* fetchBios({ payload }) {
    try {
        const bios = yield handleFetchBios(payload);
        console.log(bios)
        yield put(
            setBio(bios)
        )
    } catch (err) {
        console.log(err)
    }
}

export function* onFetchBiosStart() {
    yield takeLatest(biosTypes.FETCH_BIOS_START, fetchBios)
}

export default function* biosSagas() {
    yield all([
        call(onAddBioStart),
        call(onFetchBiosStart)
    ])
}
