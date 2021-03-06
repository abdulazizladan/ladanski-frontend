import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  data!: Project;

  constructor() { }

  ngOnInit(): void {

  }

}
