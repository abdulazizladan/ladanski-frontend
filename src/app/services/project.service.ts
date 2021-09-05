import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor( private http: HttpClient) { }

  findAll(): Observable<Project[]>{
    return this.http.get<Project[]>('/app/projects')
  }
}
