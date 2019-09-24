import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColumnsService, InputColumn } from 'src/app/service/columns.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-formula-fields',
  templateUrl: './formula-fields.component.html',
  styleUrls: ['./formula-fields.component.css']
})

export class FormulaFieldsComponent implements OnInit, OnDestroy {

  //private subscription : Subscription;

  // data for the table for columns for scope
  data : any;

  constructor(private columnService : ColumnsService,library : FaIconLibrary) {
    library.addIcons(faTrash, faPlusSquare);
   }

  ngOnInit() {
    //this.subscription = this.columnService.data.subscribe(data => this.data = data);
    this.columnService.getColumns().subscribe(data => {this.data = data;});
  }
  
  ngOnDestroy(){
  }

  changeColName(e, i){
    this.data[i].col_name = e.target.value;
  }

  changeScope(i){
    this.data[i].col_scope = !this.data[i].col_scope;
  }

  changeColType(e,i){
    this.data[i].col_type = e.target.value;
  }

  changeFormula(e,i){
    this.data[i].col_formula = e.target.value;
  }

  removeColumn(col, i){
    let colId = col.colId;
    this.columnService.removeColumn(colId).subscribe(
      ()=> {console.log("column with id" + colId + "has been deleted")}
      ,
      (err) => console.log(err));
      this.data.splice(i,1);
  }

  addColumn(){

    let newCol : InputColumn = {
      colId: 0,
      col_formula : "false",
      col_name : "new field",
      col_scope : 0,
      col_type : "Text",
    }

    this.columnService.addNewColumn(newCol).subscribe((res) =>{
      newCol.colId = res;
      this.data.push(newCol);
      //console.log(newCol);
    });

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
  }
}
