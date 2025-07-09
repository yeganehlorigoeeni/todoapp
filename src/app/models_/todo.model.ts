import { Title } from "@angular/platform-browser";

export class TodoForSaveModel{
    title:string;
    description:string;
    date:Date;
    constructor(title:string='', description:string='', date:Date =new Date()){
        this.title=title;
        this.description=description;
        this.date=date;
    }
}

    export class TodoForListModel {
        id:number;
        title:string;
        description:string;
        date:Date;
        documentId:string;

        constructor(id:number=0, title:string='',description:string='',documentId:string='',date:Date=new Date()) {
            this.id=id;
            this.title=title;
            this.description=description;
            this.date=date;
            this.documentId=documentId;
            
        }
    }
   
export interface GetTodoForUserDto {
        id:number;
        title:string;
        description:string;
        date:Date;
        documentId:string;
        
        users : [
            {
                id:string
            }
        ]
}