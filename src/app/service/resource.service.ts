import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})


export class ResourceService {
  

  getResourceByProject(projectId){
    let url = "http://192.168.1.122:8080/RM/project/"+projectId;
    return this.http.get(url);
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

    //TODO: remove login
    //console.log(obj);
    this.http.post(`${this.baseURL}/resource`, obj)
        .subscribe(res => console.log('Done'));
  }
}