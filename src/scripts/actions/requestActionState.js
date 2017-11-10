import {
START_REQUEST,
RESET_REQUEST,
FINISH_REQUEST,
ENABLE_REQUEST,
DISABLE_REQUEST
} from './actionTypes';

import { createAction } from 'redux-actions';

export const startRequest=createAction(START_REQUEST);
export const resetRequest=createAction(RESET_REQUEST);
export const finishedRequest=createAction(FINISH_REQUEST);
export const enableRequest=createAction(ENABLE_REQUEST);

export const disableRequest=createAction(DISABLE_REQUEST);
