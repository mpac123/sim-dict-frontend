import { takeEvery } from "redux-saga/effects";
import * as at from "../actions";
import { searchTranslations } from "./apiSagas";

function* helloSaga() {
  yield console.log("Hello Sagas!");
}

function* watchSearchTranslations() {
  yield takeEvery(at.SEARCH_TRANSLATIONS, searchTranslations);
}

export { helloSaga, watchSearchTranslations };
