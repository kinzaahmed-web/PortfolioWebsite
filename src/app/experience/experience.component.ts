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
        details: "In order to test my understanding of the theory and skills in software development, I decided I want to to intern as a software engineer."
        +" Being in software engineering allows me to gain skills that range from creating and devloping websites, working with databases and also creating something that is user friendly. " 
        + "I knew Target would be a great place to do this because not only are they big on their technology and staying up to date but they also value their customers and try to ensure the best experience for them!",
        detailsColor : "rgba(186, 54, 45, 0.8)",
      },

      {
        role: "Applications Engineer Intern",
        company: "CHS Inc HQ",
        color: "#add8e6",
        companylogo: "assets/experience/chsLogo.PNG",
        date: "March 2021 - May 2021",
        desc: "MyCHS Applications Engineer intern at CHS Inc where I worked on the MyCHS team.",
        details: "Before moving to Target, I wanted to have one more rotation experience with CHS Inc. This experience was to get my feet wet in the world of software development. I had the opportunity to work on "
        + " an application, MyCHS, that makes viewing CHS Business activity easier. Farmers can log on to access multiple accounts and view scale tickets, grain contracts and settlements, prepay balances, billing history and more. "
        + "My internship experience revolved around full stack work, where I worked with Angular, middleware APIs, SQL, and building a PWA. Not only did I learn technologies, I also gained a better understanding of the CI/CD management and how the software "
        + "development cycle works.",
        detailsColor : "rgba(173, 216, 230,0.8)",
      },

      {
        role: "Automation Engineer Intern",
        company: "CHS Inc HQ",
        color: "#add8e6",
        companylogo: "assets/experience/chsLogo.PNG",
        date: "August 2019 - May 2021",
        desc:  "IT QA Automation Engineer intern at CHS Inc where I worked on the Automation team.",
        details: "Coming into CHS Inc, I had a pretty clear mindset of what I wanted from this internship. I wanted to gain more coding experience and strengthen my leadership skills. "
        + "The longest rotation I did at CHS was with the automation team for about 16 months! It was a life changing experience and I have learnt so much from the testing world. Not only did I gain insight and value into why testing our code matters " 
        + "but I also got to express that importance to others. While I did build our testing solution, I also took on a big task on training the offshore team our framework. This experience gave me more exposure on how to manage a team, the work load, "
        + "and how to deal with people. I thoroughly enjoyed teaching and passing the knowledge to other people.",
        detailsColor : "rgba(173, 216, 230,0.8)",
      },

      {
        role: "IT Risk Management Intern",
        company: "CHS Inc HQ",
        color: "#add8e6",
        companylogo: "assets/experience/chsLogo.PNG",
        date: "June 2020 - Aug 2020",
        desc: "IT Risk Management intern at CHS Inc where I worked on the Risk Management team.",
        details: "In Summer 2020, I had an internship planned with Best Buy on their risk management team. But unfortunately COVID had hit and Best Buy had to cancel their internship program. "
        + "I was bummed out at first but I didn't want a learning opportunity go by! So I networked within the company I was interning at and expressed my interest in the world of risk compliance and "
        + "security. Through that, I was fortunate enough to be put on the Risk Management team where I built an improved version of our risk management framework and also conducted a CHS wide " 
        + "security event table top to exercise our Data Incident Playbook. I learnt a lot about the importance of security in the world of technology!",
        detailsColor : "rgba(173, 216, 230,0.8)",
      },

      {
        role: "IT Client Services Intern",
        company: "Ecolab HQ",
        color: "#0077be",
        companylogo: "assets/experience/ecolabLogo.jpg",
        date: "August 2018 - August 2019",
        desc: "IT Client Services intern at Ecolab HQ where I worked on the IT Client Services team.",
        details: "This was my first ever internship in the field of IT and at the time I wasn't sure what I wanted to do. I have learnt valuable skills like troubleshooting, communicating and expanding my technical skillset. " 
        + "I not only gained a good experience in dealing with customers, vendors and employees but I also used my time to get connected with people at Ecolab who did jobs that caught my eye. "
        +"It was through this internship where I had my first job shadow for software development and I absolutely fell in love with it. I knew it was something I wanted to do in the future.",
        detailsColor : "rgba(0, 119, 190,0.8)",
      },
    ]
  }

  
}
