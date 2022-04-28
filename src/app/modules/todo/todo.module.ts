import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoMainComponent } from './pages/todo-main/todo-main.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

const routes: Routes = [
  {
    path: '',
    component: TodoMainComponent,
  }

]

@NgModule({
  declarations: [
    TodoMainComponent,
    HeaderComponent,
    TodoListComponent,
    TodoComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class TodoModule { }
