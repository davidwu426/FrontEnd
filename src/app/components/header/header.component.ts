import { Component, OnInit } from '@angular/core';
import { faUserCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ProjectService } from 'src/app/service/project-service.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  currProjectName:string;

  constructor(library : FaIconLibrary, _projectService: ProjectService) {
    library.addIcons(faUserCircle, faQuestionCircle);
    _projectService.currentProjectId$.subscribe( project=>
      {
        this.currProjectName = project.projectName; 
      });
   }

  ngOnInit() {
  }

}
