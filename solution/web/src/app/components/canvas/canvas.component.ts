import { drawCirc, glueRect, eraseRect, halfRect, glueCirc, eraseCirc, halfCirc, glueTria, eraseTria, halfTria } from './../../actions/option.action';
import { ToolbarState, STATE_GLUE, STATE_ERASER, STATE_SCISSOR } from './../../model/toolbar.model';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Injectable,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { takeUntil, filter, tap, take } from 'rxjs/operators';
import { drawRect } from 'src/app/actions/option.action';
import { ShapeState } from 'src/app/model/shape-state.model';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit {
  props = { width: 600, height: 600 };

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;

  toolbar$: Observable<ToolbarState>;
  option$: Observable<ShapeState>;

  private ctx: CanvasRenderingContext2D;

  constructor(
    private store: Store<{ toolbar: ToolbarState; option: ShapeState }>,
    private actions$: Actions
  ) {
    this.toolbar$ = store.pipe(select('toolbar'));
    this.option$ = store.pipe(select('option'));
  }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    // Add behind elements.
    this.ctx.globalCompositeOperation = 'destination-over';
    this.canvas.nativeElement.width = 600;
    this.canvas.nativeElement.height = 600;
    let flag = false;

    this.option$.subscribe((e) => {
      console.log(1);
      // Now draw!

      this.ctx.clearRect(0, 0, this.props.width, this.props.height);
      if (e.rect) {
        this.ctx.fillStyle = 'blue';
        if (e.rectSplitted) {
          // splitted
          this.ctx.fillRect(10, 10, 50, 100);
          this.ctx.fillRect(70, 10, 50, 100);
        } else {
          this.ctx.fillRect(10, 10, 100, 100);
        }
      }
      if (e.tria) {
        this.ctx.fillStyle = 'red';
        if (e.triaSplitted) {
          // splitted
          let offsetX = 100;
          let offsetY = 100;
          this.ctx.beginPath();
          this.ctx.moveTo(50 + offsetX, 140 + offsetY);
          this.ctx.lineTo(150 + offsetX, 60 + offsetY);
          this.ctx.lineTo(150 + offsetX, 140 + offsetY);
          this.ctx.closePath();
          this.ctx.fill();

          this.ctx.beginPath();
          this.ctx.moveTo(160 + offsetX, 140 + offsetY);
          this.ctx.lineTo(160 + offsetX, 60 + offsetY);
          this.ctx.lineTo(260 + offsetX, 140 + offsetY);
          this.ctx.closePath();
          this.ctx.fill();
        } else {
          let offsetX = 100;
          let offsetY = 100;
          this.ctx.beginPath();
          this.ctx.moveTo(50 + offsetX, 140 + offsetY);
          this.ctx.lineTo(150 + offsetX, 60 + offsetY);
          this.ctx.lineTo(250 + offsetX, 140 + offsetY);
          this.ctx.closePath();
          this.ctx.fill();
        }
      }
      if (e.circ) {
        this.ctx.fillStyle = 'green';
        if (e.circSplitted) {
          // splitted

          this.ctx.beginPath();
          // this.ctx.arc(450, 350, 50, 0, Math.PI);
          this.ctx.arc(450, 350, 50, 0, Math.PI, true);
          this.ctx.closePath();
          this.ctx.fill();

          this.ctx.beginPath();
          this.ctx.arc(450, 370, 50, 0, Math.PI, false);
          this.ctx.closePath();
          this.ctx.fill();
        } else {
          this.ctx.beginPath();
          this.ctx.arc(450, 350, 50, 0, 2 * Math.PI);
          this.ctx.closePath();
          this.ctx.fill();
        }
      }
    });
  }

  clicked(event) {
    // Get the coordinates of the click
    var eventLocation = this.getEventLocation(event);
    // Get the data of the pixel according to the location generate by the getEventLocation function
    var pixelData = this.ctx.getImageData(
      eventLocation.x,
      eventLocation.y,
      1,
      1
    ).data;
    // If transparency on the pixel , array = [0,0,0,0]
    console.log(pixelData);
    this.toolbar$.pipe(take(1)).subscribe((e)=>{
      console.log(e.state)
    if (
      pixelData[0] == 0 &&
      pixelData[1] == 0 &&
      pixelData[2] == 255 &&
      pixelData[3] == 255
    ) {
      // rectangle
      // this.toolbar$.pipe(take(1)).subscribe();
      if(e.state == STATE_GLUE){
        this.store.dispatch(glueRect());
      }else if(e.state == STATE_ERASER){
        this.store.dispatch(eraseRect());
      }else if(e.state == STATE_SCISSOR){
        this.store.dispatch(halfRect());
      }
    } else if (
      pixelData[0] == 255 &&
      pixelData[1] == 0 &&
      pixelData[2] == 0 &&
      pixelData[3] == 255
    ) {
      // triangle
      if(e.state == STATE_GLUE){
        this.store.dispatch(glueTria());
      }else if(e.state == STATE_ERASER){
        this.store.dispatch(eraseTria());
      }else if(e.state == STATE_SCISSOR){
        this.store.dispatch(halfTria());
      }
    } else if (
      pixelData[0] == 0 &&
      pixelData[1] == 128 &&
      pixelData[2] == 0 &&
      pixelData[3] == 255
    ) {
      // circle
      if(e.state == STATE_GLUE){
        this.store.dispatch(glueCirc());
      }else if(e.state == STATE_ERASER){
        this.store.dispatch(eraseCirc());
      }else if(e.state == STATE_SCISSOR){
        this.store.dispatch(halfCirc());
      }
    }});
  }
  getEventLocation(event) {
    // Relies on the getElementPosition function.
    var pos = this.getElementPosition(this.canvas);

    return {
      x: event.pageX - pos.x,
      y: event.pageY - pos.y,
    };
  }

  getElementPosition(obj) {
    var curleft = 0,
      curtop = 0;
    if (obj.nativeElement.offsetParent) {
      do {
        curleft += obj.nativeElement.offsetLeft + 16;
        curtop += obj.nativeElement.offsetTop + 16;
      } while ((obj = obj.offsetParent));
      return { x: curleft, y: curtop };
    }
    return undefined;
  }
}
