import {Component} from '@angular/core';
import {TodoDataService} from "./todo-data.service";
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  /**
   * @param todo
   */
  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  // Service is now available as this.todoDataService
  /**
   * @param todo
   */
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
}
