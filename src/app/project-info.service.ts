import { Injectable } from '@angular/core';
import { Project } from './models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectInfoService {
  projects: Project[];
  constructor() { }

  getProjects() {
    return this.projects= [
      {
        url: "budget-tracker",
        backgroundImg: "assets/projects/card1.jpg",
        name:"Budget Tracker",
      },
      {
        url: "target-store-capacity-tracker",
        backgroundImg: "assets/projects/card2.jpg",
        name:"Target Store Capacity Tracker",
        video: {
          videoTitle: 'Store Capacity Tracker',
          videoUrl: 'assets/projects/TargetCapacityTracker.mp4',
        },
      },
      {
        url: "portfolio-website",
        backgroundImg: "assets/projects/card3.jpg",
        name:"Portfolio Website",
      },
      {
        url: "task-master",
        backgroundImg: "assets/projects/card4.jpg",
        name:"Task Master",
      },
    ]
  }
}
