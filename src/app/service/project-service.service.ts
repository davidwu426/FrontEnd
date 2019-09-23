import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { IProject } from '../components/project/projectInterface' ; 
import { IResource } from '../components/project/resourceInterface';
import { IProjectResource } from '../components/project/projectResourceInterface';
import { MatTableDataSource } from '@angular/material';
import { Observable,throwError } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private _urlr: string = "/assets/resource.json";
  private _urlpr: string = "/assets/projectRsource.json";
  private _urlp: string = "/assets/project.json";
  private addRowsSource = new Subject<MatTableDataSource<IResource>>(); //new MatTableDataSource<IEmployee>()
  private currentProjectId = new Subject<IProject>();

  addRowsSource$ = this.addRowsSource.asObservable();
  currentProjectId$ = this.currentProjectId.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  getResource(): Observable<IResource[]>{
    return this.http.get<IResource[]>(this._urlr);
  }

  getProjectResource(): Observable<IProjectResource[]>{
    return this.http.get<IProjectResource[]>(this._urlpr);
  }

  getProject(): Observable<IProject[]>{
    return this.http.get<IProject[]>(this._urlp);
  }

  getRows( projectTable: MatTableDataSource<IResource>){
    this.addRowsSource.next(projectTable);
  }

  getCurrentProjectId(projectId: IProject){
    this.currentProjectId.next(projectId);
  }
  

  postProjectResource(prRelation: IProjectResource[]){

    return this.http.post<IProjectResource[]>(this._urlpr, prRelation).subscribe(res => console.log(res));
  }

  // addNewColumn(newCol){
  //   let url = "http://192.168.1.122:8080/RM/projectResource/"+PROJECT_DATA.projectId+"/column";
    
  //   this.http.post<InputColumn>(url, newCol).subscribe(res => console.log(res));
  // }
}
