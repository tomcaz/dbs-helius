import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ToolbarState } from './model/toolbar.model';
import { Observable } from 'rxjs';
import { loadApi } from './actions/toolbar.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'web';
  constructor(private store : Store<{}>){
  }

  ngOnInit(){
    this.store.dispatch(loadApi());
  }
  
}
