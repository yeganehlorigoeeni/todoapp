import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoSrvice {
private apiUrl = 'http://localhost:1337/api/tasks'; 

  constructor(private http: HttpClient) {}


  getNotes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


  addNote(note: any): Observable<any> {
    return this.http.post('http://localhost:1337/api/tasks', { data:{
      title:note.title,
      description:note.description,
      date:note.date
    } });
  }

getNoteByDocumentId(documentId: string): Observable<any> {
  return this.http.get('http://localhost:1337/api/notes?filters[documentId][$eq]=${documentId}');
}

deleteNote(id: number): Observable<any> {
  return this.http.delete('http://localhost:1337/api/notes/${id}');
}

  
  getNote(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }


}
