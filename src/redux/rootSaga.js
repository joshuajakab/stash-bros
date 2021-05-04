import userSagas from './User/user.sagas';
import biosSagas from './Bios/bios.sagas';
import { all, call } from '@redux-saga/core/effects';

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(biosSagas)
    ])
}
