import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { OptionsComponent } from './components/options/options.component';
import { StoreModule } from '@ngrx/store';
import { toolbarReducer } from './reducers/toolbar.reducer';
import { EffectsModule } from '@ngrx/effects';
import { optionReducer } from './reducers/option.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CanvasComponent,
    ToolbarComponent,
    OptionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(
      { toolbar: toolbarReducer, option: optionReducer },
      {
        runtimeChecks: {
          // strictStateImmutability and strictActionImmutability are enabled by default
          strictStateSerializability: true,
          strictActionSerializability: true,
          strictActionWithinNgZone: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
