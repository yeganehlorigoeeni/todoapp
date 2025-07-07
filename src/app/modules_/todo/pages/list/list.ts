import { Component } from '@angular/core';
import { TodoSrvice } from '../../../../services_/todo';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';





@Component({
  selector: 'app-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
   notes: any[] = [];

  constructor(private todoservice: TodoSrvice) {}

  ngOnInit() {
    this.todoservice.getNotes().subscribe((res: any) => {
      console.log(':white_check_mark: notes response:', res);
      this.notes = res.data;
      console.log('notes', this.notes)

    });

    
  }

deleteNote(id: string) {
  this.todoservice.deleteNote(id).subscribe(() => {
<<<<<<< HEAD
    this.notes = this.notes.filter(n => n.documentId !== id);
=======
    // this.notes = this.notes.filter(n => n.documentId !== documentId);
>>>>>>> 5853c47a8b79cd0f23e80a53a56a7149a74df445
  });
}

  }

