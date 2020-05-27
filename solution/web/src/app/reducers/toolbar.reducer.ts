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
} from '../actions/toolbar.action';
import { Action, createReducer, on, State } from '@ngrx/store';

export const ToolbarReducerFeatureKey = 'toolbarReducer';

export const initialState: ToolbarState = {
  state: STATE_SCISSOR,
};

const _toolbarReducer = createReducer(
  initialState,
  on(reset, (state, payload) => ({
    ...initialState,
  })),
  on(useScissor, (state, payload) => ({
    ...initialState,
    state: STATE_SCISSOR,
  })),
  on(useEraser, (state, payload) => ({
    ...initialState,
    state: STATE_ERASER,
  })),
  on(useGlue, (state, payload) => ({
    ...initialState,
    state: STATE_GLUE,
  }))
);

export function toolbarReducer(state, action) {
  return _toolbarReducer(state, action);
}
