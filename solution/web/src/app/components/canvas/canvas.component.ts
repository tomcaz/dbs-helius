import { ToolbarState } from './../../model/toolbar.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

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

  private ctx: CanvasRenderingContext2D;

  constructor(private store: Store<{ toolbar: ToolbarState }>) {
    this.toolbar$ = store.pipe(select('toolbar'));
  }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    // Add behind elements.
    this.ctx.globalCompositeOperation = 'destination-over';
    // Now draw!
    this.ctx.fillStyle = 'lightgray';
    this.ctx.fillRect(0, 0, this.props.width, this.props.height);
  }
}
