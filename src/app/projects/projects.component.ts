import { Project } from './../models/Project';
import { Component, OnInit } from '@angular/core';
import { ProjectInfoService } from '../project-info.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor(private projectService:ProjectInfoService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

}
