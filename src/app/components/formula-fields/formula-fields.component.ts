import { Component, OnInit, Input } from '@angular/core';
import { ColumnsService, Column } from 'src/app/service/columns.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-formula-fields',
  templateUrl: './formula-fields.component.html',
  styleUrls: ['./formula-fields.component.css']
})

export class FormulaFieldsComponent implements OnInit {


  // data for the table for columns for scope
  data : Column[];

  @Input() scopes: string[] ;

  constructor(private columnService : ColumnsService,library : FaIconLibrary) {
    library.addIcons(faTrash, faPlusSquare);
   }

  ngOnInit() {
    this.columnService.data.subscribe(data => this.data = data);
  }

  changeScope(col, e){
    var index = this.data.indexOf(col);
    this.data[index].colScope = !this.data[index].colScope;
    this.columnService.editCols(this.data);
  }

  removeColumn(column : Column){
    var index = this.data.indexOf(column);
    this.data.splice(index,1);
    this.columnService.editCols(this.data);
  }

}
