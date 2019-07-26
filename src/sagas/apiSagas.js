import { backendUrl } from "../config";
import * as at from "../actions";
import { call, put } from "redux-saga/effects";
import { successAction, requestAction } from "../actions/helpers";

const apiSearchTranslations = async action => {
  const fetchData = await fetch(
    `${backendUrl}/translations?q=${action.payload.search}*`
  );
  return await fetchData.json();
};

const apiGetTranslations = async word => {
  const fetchData = await fetch(`${backendUrl}/translations/${word}`);
  return await fetchData.json();
};

export function* searchTranslations(action) {
  yield put({ type: requestAction(at.SEARCH_TRANSLATIONS) });
  const response = yield call(apiSearchTranslations, action);
  yield put({ type: successAction(at.SEARCH_TRANSLATIONS), payload: response });
}

export function* getTranslations(action) {
  yield put({ type: requestAction(at.GET_TRANSLATIONS) });
  const response = yield call(apiGetTranslations, action.payload);
  yield put({ type: successAction(at.GET_TRANSLATIONS), payload: response });
}
