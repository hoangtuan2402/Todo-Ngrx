import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const DeleteTodos = createAction(
  '[DeleteTodo] Load DeleteTodos',
  props<{ todo: TodoModel }>()
);

export const DeleteTodosSuccess = createAction(
  '[DeleteTodo] Load DeleteTodos Success'
);

export const DeleteTodosFailure = createAction(
  '[DeleteTodo] Load DeleteTodos Failure',
  props<{ error: string }>()
);
