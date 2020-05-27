import {
  drawCirc,
  drawRect,
  drawTria,
  drawReset,
  eraseRect,
  halfRect,
  glueRect,
  eraseCirc,
  halfCirc,
  eraseTria,
  halfTria,
  glueTria,
  glueCirc,
} from './../actions/option.action';
import { Action, createReducer, on, State } from '@ngrx/store';
import { ShapeState } from '../model/shape-state.model';

export const optionReducerFeatureKey = 'optionReducer';

export const initialState: ShapeState = {
  rect: false,
  rectSplitted: false,
  tria: false,
  triaSplitted: false,
  circ: false,
  circSplitted: false,
};

const _optionReducer = createReducer(
  initialState,
  on(drawRect, (state, payload) => ({
    ...state,
    rect: true,
  })),
  on(eraseRect, (state, payload) => ({
    ...state,
    rect: false,
    rectSplitted: false,
  })),
  on(halfRect, (state, payload) => ({
    ...state,
    rect: true,
    rectSplitted: true,
  })),
  on(glueRect, (state, payload) => ({
    ...state,
    rect: true,
    rectSplitted: false,
  })),
  on(drawCirc, (state, payload) => ({
    ...state,
    circ: true,
  })),
  on(eraseCirc, (state, payload) => ({
    ...state,
    circ: false,
    circSplitted: false,
  })),
  on(halfCirc, (state, payload) => ({
    ...state,
    circ: true,
    circSplitted: true,
  })),
  on(glueCirc, (state, payload) => ({
    ...state,
    circ: true,
    circSplitted: false,
  })),
  on(drawTria, (state, payload) => ({
    ...state,
    tria: true,
    triaSplitted: false,
  })),
  on(eraseTria, (state, payload) => ({
    ...state,
    tria: false,
    triaSplitted: false,
  })),
  on(halfTria, (state, payload) => ({
    ...state,
    tria: true,
    triaSplitted: true,
  })),
  on(glueTria, (state, payload) => ({
    ...state,
    tria: true,
    triaSplitted: false,
  })),
  on(drawReset, (state, payload) => ({
    ...initialState,
  }))
);

export function optionReducer(state, action) {
  return _optionReducer(state, action);
}
