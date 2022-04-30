import { createAction, props } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';

export const UpdateTodos = createAction(
  '[UpdateTodo] Load UpdateTodos',
  props<{ todo: TodoModel }>()
);

export const UpdateTodosSuccess = createAction(
  '[UpdateTodo] Load UpdateTodos Success'
);

export const UpdateTodosFailure = createAction(
  '[UpdateTodo] Load UpdateTodos Failure',
  props<{ error: string }>()
);
