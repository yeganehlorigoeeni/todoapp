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
   note = {
    title: '',
    description: '',
    date: ''
  };

  router:Router=inject(Router);
  constructor(private todoservice: TodoSrvice) {}

  saveNote() {
    console.log('note value:', this.note);
    if (!this.note.date) {
  this.note.date = new Date().toISOString().substring(0, 10);
}
this.router.navigate(['/list']);
   

this.todoservice.addNote(this.note).subscribe(() => {
  this.note = { title: '', description: '', date: '' };
});

}
}