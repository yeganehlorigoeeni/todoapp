import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map,Observable } from 'rxjs';
import { GetTodoForUserDto, TodoForListModel, TodoForSaveModel } from '../models_/todo.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoSrvice {
private apiUrl = 'http://localhost:1337/api/todos'; 


  constructor(private http: HttpClient) {}


  getTodos(): Observable<{data:TodoForListModel[]}> {
    return this.http.get<{data:TodoForListModel[]}>(this.apiUrl+"?populate=*");
  }

  
  getTodosById(): Observable<{data:GetTodoForUserDto[]}> {
    return this.http.get<{data:GetTodoForUserDto[]}>(this.apiUrl + '?populate=*');
  }


  addTodo(note: TodoForSaveModel): Observable<{data:TodoForSaveModel[]}> {
    return this.http.post<{data:TodoForSaveModel[]}>('http://localhost:1337/api/todos', { data:{
      title:note.title,
      description:note.description,
      
    } });
  }

getNoteByDocumentId(documentId: string): Observable<{data:any[]}> {
  return this.http.get<{data:any[]}>(`http://localhost:1337/api/todos?filters[documentId][$eq]=${documentId}`);
}

  deleteTodo(id: string): Observable<any> {
  console.log(id)
  return this.http.delete(`http://localhost:1337/api/todos/${id}`);
}
  
  getNote(id: number): Observable<{data:TodoForListModel}> {
    return this.http.get<{data:TodoForListModel}>(`${this.apiUrl}/${id}`);
  }



  editTodo(todoForUpdate: TodoForListModel): Observable<TodoForListModel> {
    const todo = {
    title: todoForUpdate.title,
    description: todoForUpdate.description,
    };
   return this.http.put<{ data: TodoForListModel }>(
    `http://localhost:1337/api/todos/${todoForUpdate.documentId}`, { data: todo }).pipe(map(res => res.data));

    
   }

}
