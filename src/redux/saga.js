import {all} from 'redux-saga/effects'
import {saga as storeSaga} from '../ducks/store'

export default function* () {
  yield all([
    storeSaga()
  ])
}