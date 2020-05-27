import { drawRect, drawCirc, drawTria } from './../../actions/option.action';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ShapeState } from 'src/app/model/shape-state.model';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
})
export class OptionsComponent implements OnInit {
  option$: Observable<ShapeState>;
  constructor(private store: Store<{}>) {
    // this.option$ = store.pipe(select('option'));
  }

  ngOnInit(): void {}
  drawShape(shape: number) {
    if (shape == 1) this.store.dispatch(drawRect());
    else if (shape == 2) this.store.dispatch(drawTria());
    else if (shape == 3) this.store.dispatch(drawCirc());
  }
}
