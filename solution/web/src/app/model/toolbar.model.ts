export interface ToolbarState {
  state: number;
  config?: any,
  loadApiFailed: false
}

export const STATE_IDLE = 0;
export const STATE_SCISSOR = 1;
export const STATE_ERASER = 2;
export const STATE_GLUE = 3;
