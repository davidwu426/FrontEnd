import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


export interface Cell{
  cellId: number,
  value : string,
  coldId : number,
  resourceId : number,
}


const CELL_DATA : Cell[] = [
  {cellId: 1, value :"Water", coldId : 1, resourceId : 1},
  {cellId : 2, value: "00 00 00", coldId:2, resourceId:1},
  {cellId : 3, value: "Electric", coldId :1, resourceId:2},
  {cellId:4,value:"00 11 00",coldId:2,resourceId:2},
]

@Injectable({
  providedIn: 'root'
})
export class CellsService {
  private cells = new BehaviorSubject<Cell[]>(CELL_DATA);
  data = this.cells.asObservable();
  constructor() { }

  changeCells(cells : Cell[]){
    this.cells.next(cells);
  }
}
