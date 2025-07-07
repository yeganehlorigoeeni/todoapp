import { Component } from '@angular/core';
import { TodoSrvice } from '../../../../services_/todo';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TodoForListModel } from '../../../../models_/todo.model';





@Component({
  selector: 'app-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
   todos: any[] = [];

  constructor(private todoservice: TodoSrvice) {}

  ngOnInit() {
    this.todoservice.getTodos().subscribe((res:any) => {
      console.log(':white_check_mark: notes response:', res);
      this.todos = res.data;
      console.log('notes', this.todos)

    });

    
  }

deleteTode(id: string) {
  this.todoservice.deleteTodo(id).subscribe(() => {
    this.todos = this.todos.filter(n => n.documentId !== id);
  });
}

  }

