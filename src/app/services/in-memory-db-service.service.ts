import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDbServiceService implements InMemoryDbService {

  createDb() {
    let projects: Project[] = [
      { title: "BizNet", description: "A business-oriented social network.", image: "" },
      { title: "MediCare", description: "A medical records management system.", image: "" }
    ];
    return {projects};
  }

  constructor() { }
}
