import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColumnsService, Column, InputColumn } from 'src/app/service/columns.service';
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
    this.columnService.getColumns().subscribe(data => {this.data2 = data; console.log(this.data2)});
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

  removeColumn(colId : number){
    this.columnService.removeColumn(colId).subscribe(
      ()=> console.log("column with id" + colId + "has been deleted"),
      (err) => console.log(err));

      for(var i = 0 ; i < this.data2.length;i++){
        if(this.data2[i].colId === colId){
          this.data2.splice(i,1);
        }
      }
  }

  addColumn(){

    let newCol : InputColumn = {
      col_formula : "false",
      col_name : "",
      col_scope : true,
      col_type : "",
    }
    
    this.columnService.addNewColumn(newCol);
    this.data2.push(newCol);
  }

  saveColumn(){
    let canUpdate = true;
    for(var i = 0 ; i < this.data.length-1;i++){
      for(var x = i+1 ; x < this.data.length;x++){
        if(this.data[i].colName === this.data[x].colName){
          console.log("same column name"+ this.data[i].colName);
          canUpdate = false;
        }
      }
    }

    if(canUpdate){
      console.log("saved column")
      this.columnService.editCols(this.data);
    }else{
      alert("Please have columns with different names");
    }
  }

}
