import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todoForm;
  todo;

  title = 'todo-app'; // DONT FORGET TO DECLARE PUBLIC
  public todoArray = [];


  public addTodo (value) {
    this.todoArray.push (value);
    console.log(this.todo);
    console.log('Added Item');
  }

  public deleteItem(todo) {
    for (let i: 0 ; i <= this.todoArray.length ; i++) {

     if (todo === this.todoArray[i]) {

      this.todoArray.splice(i, 1);
     }
    }
    console.log('Delete Item');
  }
  public todoSubmit(value: any) {
    if (value !== '') {
      this.todoArray.push(value.todo);
      } else {
        alert('Field required **');
      }
     }


}

