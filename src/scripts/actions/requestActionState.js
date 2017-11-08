import {
START_REQUEST,
RESET_REQUEST,
FINISH_REQUEST,
ENABLE_REQUEST,
DISABLE_REQUEST
} from './actionTypes';

import { createAction } from 'redux-actions';

const startRequest=createAction(START_REQUEST);
const resetRequest=createAction(RESET_REQUEST);
const finishRequest=createAction(FINISH_REQUEST);
const enableRequest=createAction(ENABLE_REQUEST);

const disableRequest=createAction(DISABLE_REQUEST);
