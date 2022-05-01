import {
    Injectable
}
from '@angular/core';
import {
    Observable, of
}
from 'rxjs';
import {
    TodoModel
}
from 'src/app/models/todo.model';

@Injectable({ providedIn: 'root' }) export class TodoService {

    private todos: TodoModel[] = [{id:'1',text:'acb',completed:false}];

    constructor() {}
    getTodos():Observable<TodoModel[] > {
        return of(this.todos);
    }

    public async addTodo(title: String):Promise<void > {
        console.log("Go Services");
        const newTodo:TodoModel= {
            id: (Math.random() * 20).toString(),
            text: title,
            completed: false
        };
        this.todos = [...this.todos, newTodo];
        console.log(this.todos);
        
    }

    async updateTodo(id: String):Promise<void > {
        for(var todo of this.todos) {
            if(todo.id == id) {
                todo.completed = !todo.completed;
            }
        }
    }
    async deleteTodo(id: String):Promise<void > {
        this.todos = this.todos.filter((val) => val.id !== id);
        console.log(this.todos);
    }


}
