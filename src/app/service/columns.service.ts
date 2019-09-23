import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';



export interface InputColumn{
  colId : any,
  col_formula : string,
  col_name :  string,
  col_scope : number,
  col_type : string
}


export interface Project{
  projectId : number,
  projectName : string;
}


const PROJECT_DATA : Project = {
  projectId : 11,
  projectName : "Construction Management",
}


@Injectable({
  providedIn: 'root'
})

export class ColumnsService {
  constructor(private httpClient : HttpClient) { }


  getColumns(){
    let url = "http://192.168.1.122:8080/RM/project/"+PROJECT_DATA.projectId+"/columns";
    return this.httpClient.get(url);
  }
  
  addNewColumn(newCol){
    let url = "http://192.168.1.122:8080/RM/project/"+PROJECT_DATA.projectId+"/column";
    return this.httpClient.post<InputColumn>(url, newCol);
  }

  removeColumn(colId : number){
    let url = "http://192.168.1.122:8080/RM/column/"+colId;
    console.log(colId);
    return this.httpClient.delete(url);
  }

}
