import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { ProjectService } from 'src/app/service/project-service.service'; 
import { IResource } from '../resourceInterface';
// import { IProjectResource } from '../projectResourceInterface';
// import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-project-rsource',
  templateUrl: './project-rsource.component.html',
  styleUrls: ['./project-rsource.component.css']
})

export class ProjectRsourceComponent implements OnInit {
  displayedColumns: string[] = ['select','name' , 'id'];
  dataSource = new MatTableDataSource<IResource>();

  constructor(private _projectService: ProjectService) { }

  
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this._projectService.getResource().subscribe( resource => 
      { this.dataSource.data = resource;
        this.dataSource.data = this.dataSource.data.slice();
      });


  }
selection = new SelectionModel<IResource>(true, []);
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    
    return numSelected === numRows;
    
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: IResource): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.resourceId + 1}`;
  }

  dataFromResource = new MatTableDataSource<IResource>();

  getSelectResource(){
    this.selection.selected.forEach(item => {
      this.dataFromResource.data.push(this.dataSource.data.find(d => d === item));
      // let index: number =  //this.dataSource.data.splice(index,1);
      this._projectService.getRows(this.dataFromResource);
      // this.dataSource = new MatTableDataSource<IResource>(this.dataSource.data);
    });
    // this.selection = new SelectionModel<IResource>(true, []);
    
  }


}
