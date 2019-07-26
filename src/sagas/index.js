import { takeEvery } from "redux-saga/effects";
import * as at from "../actions";
import { searchTranslations, getTranslations } from "./apiSagas";

export function* helloSaga() {
  yield console.log("Hello Sagas!");
}

export function* watchSearchTranslations() {
  yield takeEvery(at.SEARCH_TRANSLATIONS, searchTranslations);
}

export function* watchGetTranslations() {
  yield takeEvery(at.GET_TRANSLATIONS, getTranslations);
}
