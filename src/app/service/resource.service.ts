import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  baseURL: string = "http://localhost:8080/RM";
  constructor(private http: HttpClient) { }

  get_resources_with_projId(id){
    return this.http.get(`${this.baseURL}/project/${id}`);
  };
  get_Allresources(){
    return this.http.get(`${this.baseURL}/resource`);
  };

  addResource_toProjId(p_id, resourceName, resourceCode) {
    const obj = {
      resourceName: resourceName,
      resourceCode: resourceCode
    };
    console.log(obj);
    this.http.post(`${this.baseURL}/project/${p_id}/resource`, obj)
        .subscribe(res => console.log('Done'));
  }
  addResource(resourceName, resourceCode) {
    const obj = {
      resourceName: resourceName,
      resourceCode: resourceCode
    };
    //console.log(obj);
    this.http.post(`${this.baseURL}/resource`, obj)
        .subscribe(res => console.log('Done'));
  }
}