import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { loadApi, loadApiSuccess, loadApiFail } from '../actions/toolbar.action';

@Injectable()
export class ApiEffects {
q
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(loadApi),
    mergeMap(() => this.apiService.loadData()
      .pipe(
        map(data => ({ type:loadApiSuccess.type, payload: data })),
        catchError(() => of({type: loadApiFail.type}))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) {}
}