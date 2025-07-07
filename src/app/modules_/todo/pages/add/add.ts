import { Component, inject } from '@angular/core';
import { TodoSrvice } from '../../../../services_/todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoForSaveModel } from '../../../../models_/todo.model';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-add',
  imports: [FormsModule,CommonModule],
  templateUrl: './add.html',
  styleUrl: './add.css'
})
export class Add {
   todo : TodoForSaveModel=new TodoForSaveModel()

  router:Router=inject(Router);
  constructor(private todoservice: TodoSrvice) {}

  saveNote() {
    console.log('note value:', this.todo);
    if (!this.todo.date) {
  this.todo.date = new Date();
}

   

this.todoservice.addTodo(this.todo).subscribe(() => {
  this.todo=new TodoForSaveModel();
  this.router.navigate(['/list']);
  
});

}
}