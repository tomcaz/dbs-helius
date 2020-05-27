import { createAction, props } from '@ngrx/store';

export const drawCirc = createAction('[Option] Draw Circle');

export const halfCirc = createAction('[Option] Half Circle');

export const glueCirc = createAction('[Option] Glue Circle');

export const eraseCirc = createAction('[Option] Erase Circle');

export const drawRect = createAction('[Option] Draw Rectangle');

export const halfRect = createAction('[Option] Half Rectangle');

export const glueRect = createAction('[Option] Glue Rectangle');

export const eraseRect = createAction('[Option] Erase Rectangle');

export const drawTria = createAction('[Option] Draw Triangle');

export const halfTria = createAction('[Option] Half Triangle');

export const glueTria = createAction('[Option] Glue Triangle');

export const eraseTria = createAction('[Option] Erase Triangle');

export const drawReset = createAction('[Option] Draw Reset');
