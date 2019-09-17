import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';


export interface Column{
  coldId : number,
  colFormula : string,
  colName :  string,
  colScope : boolean,
  colType : string,
  projectId : number,
}

const COLUMN_DATA : Column[]= [
  {coldId : 1, colFormula : "none", colName : "Resource Name", colScope: true, colType: "String", projectId:1},
  {coldId : 2, colFormula : "none", colName : "Resource Code", colScope: true, colType: "String", projectId:1},
  {coldId: 3, colFormula:"none", colName:"Quantity", colScope :false, colType : "number", projectId :1}
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
}
