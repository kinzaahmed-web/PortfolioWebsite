import { Project } from './../../models/Project';
import { Component, OnInit, Input } from '@angular/core';
import { ProjectInfoService } from '../../project-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  project: Project[];
  @Input() proj: Project;
  lastPart: String;
  constructor(private projectService:ProjectInfoService, private router: Router) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    console.log(this.projects);
    this.lastPart = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
    this.lastPart = this.lastPart.split('-').join(' ');
    this.project = this.projects.filter(proj => proj.name.toUpperCase() === this.lastPart.toUpperCase());
    console.log(this.project);
  }

}
