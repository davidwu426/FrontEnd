import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ProjectResource{
  projectId : number,
  resourceId : number,
}

const PROJECT_RESOURCE_DATA  : ProjectResource[] = [
  {projectId :1 , resourceId : 1},
  {projectId :1 , resourceId : 2},
  {projectId :1 , resourceId : 3},
  {projectId :1 , resourceId : 4},
  {projectId :1 , resourceId : 5},
  {projectId :1 , resourceId : 6},
  {projectId :1 , resourceId : 7},
  {projectId :1 , resourceId : 8},
  {projectId :1 , resourceId : 9},
  {projectId :1 , resourceId : 10},
  {projectId :1 , resourceId : 11},
  {projectId :1 , resourceId : 12},
  {projectId :1 , resourceId : 13},
  {projectId :1 , resourceId : 14},
  {projectId :1 , resourceId : 15},
  {projectId :1 , resourceId : 16},
  {projectId :1 , resourceId : 17},
  {projectId :1 , resourceId : 18},
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
