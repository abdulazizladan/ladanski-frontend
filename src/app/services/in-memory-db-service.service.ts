import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDbServiceService implements InMemoryDbService {

  createDb() {
    let projects: Project[] = [
      { title: "BizNet", description: "A business-oriented social network.", image: "", disabled: false, url: 'https://www.biznet.com.ng' },
      { title: "MediCare", description: "A medical records management system.", image: "", disabled: true, url: ''},
      { title: "ProMon", description: "A project records management system.", image: "", disabled: true, url: '' },
      { title: "ItSchool", description: "A learning management system.", image: "", disabled: true, url: '' }
    ];
    return {projects};
  }

  constructor() { }
}
