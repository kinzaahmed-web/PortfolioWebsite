import { Component, OnInit } from '@angular/core';

import { Experience } from '../models/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  viewExperiences:boolean;
  experience: Experience[];
  constructor() { }

  ngOnInit(): void {
    this.viewExperiences = true,
    this.experience= [
      {
        role: "Software Engineer Intern",
        company: "Target HQ",
        color: "#DC143C",
        companylogo: "assets/experience/targetLogo.jpg",
        date: "Present",
        desc: "Full Stack Developer intern at Target for 2021 working on the Identity Governance team.",
      },

      {
        role: "Applications Engineer Intern",
        company: "CHS Inc HQ",
        color: "#add8e6",
        companylogo: "assets/experience/chsLogo.PNG",
        date: "March 2021 - May 2021",
        desc: "Full Stack Developer intern at Target for 2021 working on the Identity Governance team.",

      },

      {
        role: "IT Client Services",
        company: "Ecolab HQ",
        color: "#0077be",
        companylogo: "assets/experience/ecolabLogo.jpg",
        date: "August 2018 - August 2019",
        desc: "Full Stack Developer intern at Target for 2021 working on the Identity Governance team.",

      },

      {
        role: "Automation Engineer Intern",
        company: "CHS Inc HQ",
        color: "#add8e6",
        companylogo: "assets/experience/chsLogo.PNG",
        date: "August 2019 - May 2021",
        desc: "Full Stack Developer intern at Target for 2021 working on the Identity Governance team.",

      },

      {
        role: "IT Risk MGMT Intern",
        company: "CHS Inc HQ",
        color: "#add8e6",
        companylogo: "assets/experience/chsLogo.PNG",
        date: "June 2020 - Aug 2020",
        desc: "Full Stack Developer intern at Target for 2021 working on the Identity Governance team.",

      },
    ]
  }

  
}
