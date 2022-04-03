import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDbServiceService implements InMemoryDbService {

  createDb() {
    let projects: Project[] = [
      { title: "BizNet", description: "A business-oriented social network.", logo: "/assets/logos/biznet.png", image: "", disabled: false, url: 'https://www.biznet.com.ng' },
      { title: "MediCare", description: "A medical records management system.", logo: "/assets/logos/medicare.png", image: "", disabled: true, url: ''},
      { title: "ProMon", description: "A project records management system.", logo: "", image: "", disabled: true, url: '' },
      { title: "ItSchool", description: "A learning management system.", logo: "", image: "", disabled: true, url: '' }
    ];
    return {projects};
  }

  constructor() { }
}
