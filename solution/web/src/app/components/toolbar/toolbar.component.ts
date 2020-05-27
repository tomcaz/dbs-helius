import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {
  STATE_IDLE,
  STATE_SCISSOR,
  STATE_ERASER,
  STATE_GLUE,
  ToolbarState,
} from './../../model/toolbar.model';
import { Component, OnInit } from '@angular/core';
import {
  reset,
  useGlue,
  useEraser,
  useScissor,
} from 'src/app/actions/toolbar.action';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  STATE_IDLE = STATE_IDLE;
  STATE_SCISSOR = STATE_SCISSOR;
  STATE_ERASER = STATE_ERASER;
  STATE_GLUE = STATE_GLUE;

  toolbar$: Observable<ToolbarState>;

  private ctx: CanvasRenderingContext2D;

  constructor(private store: Store<{ toolbar: ToolbarState }>) {
    this.toolbar$ = store.pipe(select('toolbar'));
  }
  ngOnInit(): void {
    this.toolbar$.subscribe(e=>{
      if(e && e.config)
      console.log(e.config.payload.toolbar.scissor)
    })
  }

  onClick(state: Number) {
    // this.toolbar$.subscribe(e=> console.log(e))

    this.toolbar$.pipe(take(1)).subscribe((e) => {
      
      if (e.state == state) state = STATE_IDLE;
      switch (state) {
        case STATE_SCISSOR:
          this.store.dispatch(useScissor());
          break;
        case STATE_ERASER:
          this.store.dispatch(useEraser());
          break;
        case STATE_GLUE:
          this.store.dispatch(useGlue());
          break;
        default:
          this.store.dispatch(reset());
          break;
      }
    });
  }
}
