import { Component, OnInit, Input } from '@angular/core';
import { ColumnsService } from 'src/app/service/columns.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export interface Columns{
  coldId : number,
  colFormula : string,
  colName :  string,
  colScope : boolean,
  colType : string,
  projectId : number,
}

@Component({
  selector: 'app-formula-fields',
  templateUrl: './formula-fields.component.html',
  styleUrls: ['./formula-fields.component.css']
})

export class FormulaFieldsComponent implements OnInit {

  data : Columns[];
  
  @Input() scopes: string[] ;

  constructor(private columnService : ColumnsService,library : FaIconLibrary) {
    library.addIcons(faTrash, faPlusSquare);
   }

  ngOnInit() {
    this.columnService.data.subscribe(data => this.data = data);
  }

  removeColumn(column : Columns){
    var index = this.data.indexOf(column);
    this.data.splice(index,1);
    this.columnService.editCols(this.data);
  }

}
