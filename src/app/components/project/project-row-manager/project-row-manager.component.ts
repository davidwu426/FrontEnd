import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ProjectService } from 'src/app/service/project-service.service'; 
import { IResource } from '../resourceInterface';
import { IProject } from '../projectInterface';
import { IProjectResource } from '../projectResourceInterface';
// import { currentId } from 'async_hooks';

@Component({
  selector: 'app-project-row-manager',
  templateUrl: './project-row-manager.component.html',
  styleUrls: ['./project-row-manager.component.css']
})


export class ProjectRowManagerComponent implements OnInit {
  
  displayedColumns: string[] = ['select','resourceName' , 'resourceId'];
  dataSource = new MatTableDataSource<IResource>();
  
  prSource = new MatTableDataSource<IProjectResource>();
  currentProjectId : number;

  constructor(private _projectService: ProjectService) { 
   
  }

  ngOnInit() {
    // this.dataSource = new MatTableDataSource<IResource>();
    this.dataSource.paginator = this.paginator;
    this._projectService.currentProjectId$.subscribe(project => {
      this.currentProjectId = project.projectId;

      // this._projectService.getResourceByProjectId(this.currentProjectId).subscribe(data => 
      // {
      //   console.log("pjID:   "+this.currentProjectId);
      //   this.dataSource.data = data;
      //   for(var i = 0;i<data.length;i++){ //this.dataSource.
      //   console.log("pj:   "+i+"is:  "+ data[i].resourceId +" and "+ data[i].resourceName );
      //   }
      // });

      
      let tempData = new MatTableDataSource<IResource>();
      this._projectService.getProjectResource().subscribe(data => 
      {
        this.prSource.data = data
        this.prSource.data.forEach( prRelation =>
        {
          this._projectService.getResource().subscribe(rsource => 
          {
            let row = rsource.find(function(d) 
            {
                return (d.resourceId === prRelation.resourceId) && ( prRelation.projectId === project.projectId ) ;
            });
            if(row)
            {
              tempData.data.push(row);
            }
            this.dataSource.data = tempData.data;
            this.dataSource.data = this.dataSource.data.slice();
            this._projectService.addRowsSource$.subscribe( table => 
            { 
              table.data.forEach( item =>
              {
                if(!this.dataSource.data.some(d => d.resourceId === item.resourceId && d.resourceName === item.resourceName))
                {
                  this.dataSource.data.push(item);
                }
              });
              this.dataSource.data = this.dataSource.data.slice();
            });
          });
        });
      }); 
      this._projectService.getResourceByProjectId(this.currentProjectId).subscribe(data => 
        {
          this.dataSource.data = data;
        });




      })
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


  removeSelectRows(){
    this.selection.selected.forEach(item => {
      let index: number = this.dataSource.data.findIndex(d => d === item);
      this.dataSource.data.splice(index,1);
      this.dataSource = new MatTableDataSource<IResource>(this.dataSource.data);
    });
    this.selection = new SelectionModel<IResource>(true, []);
    
  }



  // a:IProjectResource = {projectId: 1, resourceId: 2}
  // {projectId: this.currentProjectId, resourceId: item.resourceId}
  prRelation : Array<IProjectResource> = [];

  addToDB(){
    // console.log(this.currentProject);
    // this.prRelation.push(this.a);
    // console.log(this.prRelation);
    this.dataSource.data.forEach(item =>
      {
        this.prRelation.push({ projectId: this.currentProjectId, resourceId: item.resourceId});
        console.log(this.prRelation);
      });
    // this._projectService.postProjectResource(this.prRelation)

  }
 
}
