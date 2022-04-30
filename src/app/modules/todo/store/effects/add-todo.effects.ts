import {
    Injectable
}
from '@angular/core';
import { async } from '@angular/core/testing';
import {
    Actions, createEffect, ofType
}
from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import {
    TodoService
}
from '../../services/todo.service';
import {
AddTodos,
AddTodosFailure,
AddTodosSuccess
} from '../actions/add-todo.actions';


@Injectable() export class AddTodoEffects {

    constructor(private actions$: Actions, private todoServices: TodoService) {}

    public getTodo = createEffect(()=>{ 
      return this.actions$.pipe(
        ofType(AddTodos),
        mergeMap(async (action) => {
          return this.todoServices
          .addTodo(action.titile)
          .then(()=> AddTodosSuccess())
          .catch((e)=> AddTodosFailure({error: e}))

        })
      )
    });
}
