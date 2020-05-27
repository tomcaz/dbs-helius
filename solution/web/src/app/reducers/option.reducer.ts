import { drawCirc, drawRect, drawTria } from './../actions/option.action';
import { Action, createReducer, on, State } from '@ngrx/store';

export const ToolbarReducerFeatureKey = 'toolbarReducer';

export const initialState = {
  // state: 0,
};

const _toolbarReducer = createReducer(
  initialState
  // on(reset, (state, payload) => ({
  //   ...initialState,
  // })),
  // on(useScissor, (state, payload) => ({
  //   ...initialState,
  //   state: 1,
  // })),
  // on(useEraser, (state, payload) => ({
  //   ...initialState,
  //   state: 2,
  // })),
  // on(useGlue, (state, payload) => ({
  //   ...initialState,
  //   state: 3,
  // }))
);

export function toolbarReducer(state, action) {
  return _toolbarReducer(state, action);
}
