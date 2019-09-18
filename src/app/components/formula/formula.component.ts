import { Component, OnInit } from '@angular/core';
import { ColumnsService, Column } from 'src/app/service/columns.service';
import { ResourceService } from 'src/app/service/resource.service';
import { Cell } from 'src/app/service/cells.service';


export interface ProjectResources{
  projectId : number,
  resourceId : number,
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  text : string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', text: "hello world"},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', text: "hello world"},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', text: "hello world"},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', text: "hello world"},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', text: "hello world"},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', text: "hello world"},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', text: "hello world"},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', text: "hello world"},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', text: "hello world"},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', text: "hello world"},
];


@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})

export class FormulaComponent implements OnInit {

  colData: Column[];
  projectResourceData  : ProjectResources[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumsn2 : string[] = []; 
  allColumns: string[] = [];
  dataSource = ELEMENT_DATA;

  constructor(private columnService : ColumnsService, private resourceService : ResourceService) { }

  ngOnInit() {
    this.columnService.data.subscribe(data => this.colData = data);
    this.resourceService.data.subscribe(data => this.projectResourceData = data);

    // setting up the total number of columns and the ones dispayed;
    for(var i = 0 ; i < this.colData.length;i++){
      if(this.colData[i].colScope === true){
        this.displayedColumsn2.push(this.colData[i].colName);
      }
      this.allColumns.push(this.colData[i].colName);
    }
  }
}
