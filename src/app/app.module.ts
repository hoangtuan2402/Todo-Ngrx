import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { todoFeatureKey, todoReducer } from './modules/todo/store/reducers/todo.reducer';
import { GetTodoEffects } from './modules/todo/store/effects/get-todo.effects';
import { TodoService } from './modules/todo/services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    StoreModule.forFeature(todoFeatureKey, todoReducer),
    EffectsModule.forFeature([GetTodoEffects]),
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
