import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from 'src/app/models/todo.model';
import { TodoState } from '../../store/reducers/todo.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() public todo: TodoModel 
  constructor(private todoStore: Store<TodoState>) { }

  ngOnInit(): void {
  }

}
