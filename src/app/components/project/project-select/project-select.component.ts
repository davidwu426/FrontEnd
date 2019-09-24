import { Component, OnInit } from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import { ProjectService } from 'src/app/service/project-service.service'; 
import { IProject } from '../projectInterface';

@Component({
  selector: 'app-project-select',
  templateUrl: './project-select.component.html',
  styleUrls: ['./project-select.component.css']
})
export class ProjectSelectComponent implements OnInit {
  dataSource = new MatTableDataSource<IProject>();
  default: IProject;
  selectedAreas: IProject[]

  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this._projectService.getProject().subscribe(data=>
    {
      // for(var i = 0;i<data.length;i++){ //this.dataSource.
      //   console.log("pj:   "+i+"is:  "+ data[i].projectId +" and "+ data[i].projectName );
      //   }
      this.dataSource.data = data;
      this.default = data[0];
      this._projectService.getCurrentProjectId( data[0]);
      this.selectedAreas = this.dataSource.data;
      // console.log("heer"+data[0]);
    });
  }

  changeProjectId(event){
    this._projectService.getCurrentProjectId(event.value);
  }

  search( pjsearch: string){
    let result: IProject[] = [];
    for(let a of this.selectedAreas){
      if(a.projectName.toLowerCase().indexOf(pjsearch) > -1){
        result.push(a);
      }
    }
    this.dataSource.data = result;
  }

}
