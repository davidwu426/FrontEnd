import { Component, OnInit } from '@angular/core';
import { ColumnsService} from 'src/app/service/columns.service';
import { ResourceService } from 'src/app/service/resource.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Cell, CellsService } from 'src/app/service/cells.service';
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
  
  colData: any ;
  d : any;
  projectResource : any;
  resource : any = [];
  displayedColumns : Map<number,string> = new Map();
  allColumns: string[] = [];
  dataSource : Object[] = [];

  
  constructor(private columnService : ColumnsService, private resourceService : ResourceService,private cellService : CellsService ,private library : FaIconLibrary) { 
    library.addIcons(faCheck);
  }
  
  ngOnInit() {

    // getting the columns
    this.columnService.getColumns().subscribe(res => {
      this.colData = res ;
      this.colData.forEach(element=>{
        if(!this.displayedColumns.has(element.colId) && element.col_scope === "1"){
          //console.log(element.col_scope);
          this.displayedColumns.set(element.colId,element.col_name);
        }
      })
      //console.log(this.displayedColumns);
    }) ;

    // get all the resources
    this.resourceService.getResourceByProject(11).subscribe(res => {
      this.projectResource = res;
      this.compileResources(); 
      console.log(this.resource);
    });
  }
  
  // compilinng the list of resourceIds
  compileResources(){
    this.projectResource.forEach( element =>{
      this.resource.push(element.res.resourceId);
    })
  }

  // setting up the displayed columns
  compileDisplayColumns(){
    this.colData.forEach(element =>{
      if(element.col_scope === true){
        console.log(element);
        this.displayedColumns.set(element.colId, element.col_name);
      }
      this.allColumns.push(element.col_name);
    })
  }

  // retrieving data for each cell from the backend
  compileTableCells(){
    let temp : Object[] = [];
    this.resource.forEach(resourceElement =>{
      var customObject : Object = {};
      for(var key of this.displayedColumns.keys()){
        this.cellService.getCellByResourceAndColumn(resourceElement,key).toPromise().then(res=> {
          //customObject[this.displayedColumns.get(key)] = res;
          console.log(res);
        })
      }
      temp.push(customObject);
    })
    return temp;
  }

  compileDisplayColumn(){

  }
}
