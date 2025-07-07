import { Component } from '@angular/core';
import { TodoForSaveModel } from '../../../../models_/todo.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  imports: [],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
   todo: TodoForSaveModel = new TodoForSaveModel();
   constructor(private route :ActivatedRoute,){}

}

