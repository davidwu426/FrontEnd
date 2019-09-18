import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColumnsService, Column } from 'src/app/service/columns.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-formula-fields',
  templateUrl: './formula-fields.component.html',
  styleUrls: ['./formula-fields.component.css']
})

export class FormulaFieldsComponent implements OnInit, OnDestroy {

  private subscription : Subscription;

  // data for the table for columns for scope
  data : Column[];
  data2 : any;

  constructor(private columnService : ColumnsService,library : FaIconLibrary) {
    library.addIcons(faTrash, faPlusSquare);
   }

  ngOnInit() {
    this.subscription = this.columnService.data.subscribe(data => this.data = data);
    //this.columnService.getColumns().subscribe(data => this.data2 = data);
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
    console.log("exiting formula-fields component");
  }

  changeColName(col, e){
    var index = this.data.indexOf(col);
    this.data[index].colName = e.target.value;
    this.columnService.editCols(this.data);
  }

  changeScope(col, e){
    var index = this.data.indexOf(col);
    this.data[index].colScope = !this.data[index].colScope;
    this.columnService.editCols(this.data);
  }

  changeColType(col,e){
    var index = this.data.indexOf(col);
    this.data[index].colType = e.target.value;
    this.columnService.editCols(this.data);
  }

  removeColumn(column : Column){
    var index = this.data.indexOf(column);
    this.data.splice(index,1);
    this.columnService.editCols(this.data);
  }

  addColumn(){
    let colz : Column = 
    {coldId: 4, colFormula:"none", colName:"", colScope :true, colType : "string", projectId :1}
    this.data.push(colz);
  }

}
