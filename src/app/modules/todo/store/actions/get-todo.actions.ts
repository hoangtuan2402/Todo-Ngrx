import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const GetTodos = createAction('[GetTodo] Load GetTodos');

export const GetTodosSuccess = createAction(
  '[GetTodo] Load GetTodos Success',
  props<{ todos: TodoModel[] }>()
);

export const GetTodosFailure = createAction(
  '[GetTodo] Load GetTodos Failure',
  props<{ error: string }>()
);
