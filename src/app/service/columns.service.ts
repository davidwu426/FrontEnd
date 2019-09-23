import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';


export interface Column{
  coldId : number,
  colFormula : string,
  colName :  string,
  colScope : boolean,
  colType : string,
  projectId: number,
}

export interface InputColumn{
  col_formula : string,
  col_name :  string,
  col_scope : boolean,
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

const COLUMN_DATA : Column[]= [
  {coldId : 1, colFormula : "none", colName : "Resource Name", colScope: true, colType: "Text", projectId:1},
  {coldId : 2, colFormula : "none", colName : "Resource Code", colScope: true, colType: "Text", projectId:1},
  {coldId: 3, colFormula:"none", colName:"Quantity", colScope :true, colType : "Number", projectId :1},
  {coldId: 4, colFormula:"none", colName:"Price", colScope :true, colType : "Number", projectId :1},
  {coldId: 5, colFormula:"none", colName:"Total", colScope :true, colType : "Formula", projectId :1},
  {coldId: 6, colFormula:"none", colName:"X", colScope :false, colType : "Number", projectId :1},
  {coldId: 7, colFormula:"none", colName:"XX", colScope :false, colType : "Formula", projectId :1},
  {coldId: 8, colFormula:"none", colName:"O", colScope :false, colType : "Number", projectId :1},
  {coldId: 9, colFormula:"none", colName:"To", colScope :false, colType : "Formula", projectId :1},
  {coldId: 61, colFormula:"none", colName:"Xd", colScope :false, colType : "Number", projectId :1},
  {coldId: 71, colFormula:"none", colName:"XXd", colScope :false, colType : "Formula", projectId :1},
  {coldId: 42, colFormula:"none", colName:"Prie", colScope :false, colType : "Number", projectId :1},
  {coldId: 52, colFormula:"none", colName:"Toxtal", colScope :false, colType : "Formula", projectId :1},
  {coldId: 62, colFormula:"none", colName:"Xa", colScope :false, colType : "Number", projectId :1},
  {coldId: 72, colFormula:"none", colName:"XdX", colScope :false, colType : "Formula", projectId :1},
]


@Injectable({
  providedIn: 'root'
})

export class ColumnsService {
  constructor(private httpClient : HttpClient) { }

  private cols = new BehaviorSubject<Column[]>(COLUMN_DATA);
  data = this.cols.asObservable();

  editCols(cols : Column[]){
    this.cols.next(cols);
  }


  getColumns(){
    let url = "http://192.168.1.122:8080/RM/project/"+PROJECT_DATA.projectId+"/columns";
    return this.httpClient.get(url);
  }
  
  addNewColumn(newCol){
    let url = "http://192.168.1.122:8080/RM/project/"+PROJECT_DATA.projectId+"/column";
    
    this.httpClient.post<InputColumn>(url, newCol).subscribe(res => console.log(res));
  }

  removeColumn(colId : number){
    let url = "http://192.168.1.122:8080/RM/column/"+colId;
    console.log(colId);
    return this.httpClient.delete(url);
  }

}
