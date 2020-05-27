import { Component, OnInit } from '@angular/core';
import { ToolbarState } from 'src/app/model/toolbar.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  toolbar$ : Observable<ToolbarState>;
  
  constructor(private store: Store<{toolbar: ToolbarState}>) { 
    this.toolbar$ = store.pipe(select('toolbar'))
  }

  ngOnInit(): void {
  }

}
