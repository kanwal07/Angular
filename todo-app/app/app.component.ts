import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo List';
  todos = [
    {
      label: 'Milk', 
      done:false, 
      priority: 3
    },
    {
      label: 'Clean', 
      done:true, 
      priority: 5
    },
    {
      label: 'Pay Bills', 
      done:false, 
      priority: 4
    }
  ];

  addTodo(newTodoLabel) {
    var newTodo = {
      label: newTodoLabel, 
      done: false,
      priority: 1
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label);
  }
}
