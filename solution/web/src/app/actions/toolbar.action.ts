import { createAction, props } from '@ngrx/store';
export const useEraser = createAction('[Toolbar] Use Eraser');

export const useScissor = createAction('[Toolbar] Use Scissor');

export const useGlue = createAction('[Toolbar] Use Glue');

export const reset = createAction('[Option] Reset');
