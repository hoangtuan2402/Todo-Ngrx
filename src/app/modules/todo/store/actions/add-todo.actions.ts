import { createAction, props } from '@ngrx/store';

export const AddTodos = createAction(
  '[AddTodo] Load AddTodos',
  props<{ titile: string }>()
);

export const AddTodosSuccess = createAction(
  '[AddTodo] Load AddTodos Success'
);

export const AddTodosFailure = createAction(
  '[AddTodo] Load AddTodos Failure',
  props<{ error: string }>()
);
