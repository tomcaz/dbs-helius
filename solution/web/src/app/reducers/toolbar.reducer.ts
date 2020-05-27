import {
  ToolbarState,
  STATE_IDLE,
  STATE_GLUE,
  STATE_ERASER,
  STATE_SCISSOR,
} from './../model/toolbar.model';
import {
  useEraser,
  useGlue,
  useScissor,
  reset,
  loadApiSuccess,
  loadApiFail,
} from '../actions/toolbar.action';
import { Action, createReducer, on, State } from '@ngrx/store';

export const ToolbarReducerFeatureKey = 'toolbarReducer';

export const initialState: ToolbarState = {
  state: STATE_SCISSOR,
  loadApiFailed:false
};

const _toolbarReducer = createReducer(
  initialState,
  on(reset, (state, payload) => ({
    ...state,
    state: STATE_IDLE
  })),
  on(useScissor, (state, payload) => ({
    ...state,
    state: STATE_SCISSOR,
  })),
  on(useEraser, (state, payload) => ({
    ...state,
    state: STATE_ERASER,
  })),
  on(useGlue, (state, payload) => ({
    ...state,
    state: STATE_GLUE,
  })),
  on(loadApiSuccess,(state,payload)=>({
    ...state,
    config:payload
  })),
  on(loadApiFail,(state,payload)=>({
    ...state,
    loadApiFailed:true
  }))
);

export function toolbarReducer(state, action) {
  return _toolbarReducer(state, action);
}
