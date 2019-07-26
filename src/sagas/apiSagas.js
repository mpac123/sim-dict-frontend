import { backendUrl } from "../config";
import * as at from "../actions";
import { call, put } from "redux-saga/effects";
import { successAction, requestAction } from "../actions/helpers";

export function* searchTranslations(action) {
  yield put({ type: requestAction(at.SEARCH_TRANSLATIONS) });
  const response = yield call(() => {
    return fetch(`${backendUrl}/translations?q=${action.payload.search}*`).then(
      res => res.json()
    );
  });
  console.log(response);
  yield put({ type: successAction(at.SEARCH_TRANSLATIONS), payload: response });
}
