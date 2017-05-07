import {Component} from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  constructor(private todoDataService: TodoDataService) {
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
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
