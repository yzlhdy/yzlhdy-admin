import { call, put } from 'redux-saga/effects'

import { loadScuccess, loadFailure, loadRequest } from '../repositories/actions'
import { login } from '../../../api/user'
import { ActionType } from 'typesafe-actions'

export function* load({ payload }: ActionType<typeof loadRequest>) {
  try {
    const reponse = yield call(login, payload)

    yield put(loadScuccess(reponse.data))
  } catch (error) {
    yield put(loadFailure())
  }
}