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
  default:IProject;
  constructor(private _projectService: ProjectService) { }

  ngOnInit() {
    this._projectService.getProject().subscribe(data=>
      {
        this.dataSource.data = data;
        this.default = data[0];
        this._projectService.getCurrentProjectId( data[0]);
    });
  }

  changeProjectId(event){
    this._projectService.getCurrentProjectId(event.value);
  }

}
