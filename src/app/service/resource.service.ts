import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ProjectResource{
  projectId : number,
  resourceId : number,
}

const PROJECT_RESOURCE_DATA  : ProjectResource[] = [
  {projectId :1 , resourceId : 1},
  {projectId :1 , resourceId : 2},
]

@Injectable({
  providedIn: 'root'
})


export class ResourceService {
  private project_resource = new BehaviorSubject<ProjectResource[]>(PROJECT_RESOURCE_DATA);
  data = this.project_resource.asObservable();

  changeProjectResource(projectResource : ProjectResource[]){
    this.project_resource.next(projectResource);
  }
  constructor() { }
}
