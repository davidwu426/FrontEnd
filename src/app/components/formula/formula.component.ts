import { Component, OnInit } from '@angular/core';
import { ColumnsService, Column } from 'src/app/service/columns.service';
import { ResourceService } from 'src/app/service/resource.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Cell } from 'src/app/service/cells.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export interface ProjectResources{
  projectId : number,
  resourceId : number,
}

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})

export class FormulaComponent implements OnInit {

  colData: Column[];
  projectResourceData  : ProjectResources[];
  displayedColumns2 : string[] = []; 
  allColumns: string[] = [];
  dataSource : Object[] = [];
  // dataSource = ELEMENT_DATA;

  constructor(private columnService : ColumnsService, private resourceService : ResourceService, private library : FaIconLibrary) { 
    library.addIcons(faCheck);
  }

  ngOnInit() {
    this.columnService.data.subscribe(data => this.colData = data);
    this.resourceService.data.subscribe(data => this.projectResourceData = data);

    // setting up the total number of columns and the ones dispayed;
    for(var i = 0 ; i < this.colData.length;i++){
      if(this.colData[i].colScope === true){
        this.displayedColumns2.push(this.colData[i].colName);
      }
      this.allColumns.push(this.colData[i].colName);
    }
    //this.dataSource = this.compileInformation();
    //console.log(this.dataSource);
    this.dataSource = this.compileInformation();
    console.log(this.dataSource);
    console.log(this.displayedColumns2);
    }

  compileInformation(){

    // Making the columns for the table
    for(var i = 0; i < this.colData.length; i++){
      let index = this.displayedColumns2.indexOf(this.colData[i].colName);
      if(index === -1){
        this.displayedColumns2.push(this.colData[i].colName);
      }
    }

    // Making the object for each row
    var customObject : Object[] = [];
    for(var i = 0 ; i < this.projectResourceData.length;i++){
      let temp : Object = {};
      for(var x = 0 ; x < this.displayedColumns2.length;x++){
        temp[this.displayedColumns2[x]] = "water";
      }
      customObject.push(temp);
    }
    return customObject;
  }
}
