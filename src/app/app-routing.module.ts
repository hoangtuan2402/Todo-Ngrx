import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./modules/todo/todo.module').then((mod) => mod.TodoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
