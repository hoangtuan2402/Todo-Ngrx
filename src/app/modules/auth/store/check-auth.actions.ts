import { createAction, props } from '@ngrx/store';

export const yCheckAuths = createAction(
  '[CheckAuth] Y CheckAuths'
);

export const yCheckAuthsSuccess = createAction(
  '[CheckAuth] Y CheckAuths Success',
  props<{ data: any }>()
);

export const yCheckAuthsFailure = createAction(
  '[CheckAuth] Y CheckAuths Failure',
  props<{ error: any }>()
);
