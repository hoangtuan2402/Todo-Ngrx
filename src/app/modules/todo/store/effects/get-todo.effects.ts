import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, of } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import {
GetTodos,
GetTodosFailure,
GetTodosSuccess
} from '../actions/get-todo.actions';


@Injectable()
export class GetTodoEffects {

  constructor(private actions$: Actions, private todoServices: TodoService) {}

  public getTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetTodos),
      mergeMap(() => {
        return this.todoServices.getTodos().pipe(
          map((todos) => GetTodosSuccess({ todos })),
          catchError((e) => of(GetTodosFailure({ error: `${e}` })))
        );
      })
    );
  });

}
