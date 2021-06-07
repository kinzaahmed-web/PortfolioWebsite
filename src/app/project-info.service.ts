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
        backgroundImg: "assets/projects/budget.jpg",
        name:"Budget Tracker",
        video: {
          videoTitle: 'Budget Tracker',
          videoUrl: 'https://www.youtube.com/embed/EqXromQqKGM',
        },
        problem: 'Have you ever considered the consequences of not budgeting? If not, now is the time. A lot of people do not have much information on how to effectively budget and end up facing some severe consequences. Some of the most common consequences of not budgeting include a lack of savings, out of control spending, and more financial stress. We do not want any of that so that is why I wanted to take initiative to help my users budget more effectively.',
        myApproach: 'I created a budget tracking web application that allows users to effectively categorize different expenses into different budgets and group similar expenses based on category. This allows full transparency to the user of where there money is going. ',
        technologies: 'I used the Django framework, a python web framework that enables rapid development of secure and maintainable sites, and added capabilities to my web application so that it would have proper security around users budgets. Other technologies and languages include HTML, CSS, and JavaScript. <br></br><img src="https://img.icons8.com/nolan/64/html.png"/> <img src="https://img.icons8.com/nolan/64/css-filetype.png"/> <img src="https://img.icons8.com/nolan/64/javascript.png"/> <img src="https://img.icons8.com/nolan/64/python.png"/> <img src="https://img.icons8.com/ios/50/000000/django.png"/>',
        challenges: "The challenge I ran in to was trying to ensure that each user's budget was only accessible to them and that no one could try to access someone else's budget. In order to do that I had to make sure I was looking into permission management. This involves authentication and authorization. Authentication is the process of verifying the person is who they claim to be, using the login screen. And Authorization is the process of verifying what this particular person is allowed to do in the application, using permissions. ",
        results: "I was able to make the web application and include features like creating new budgets, authentication and authorization, graph visualizations, and grouping of expenses based on category. Use Budget Tracker to be mindful of your daily expenses, that way you can make sure that you're spending your money on things that really matter to you. When you budget you decide where your money goes instead of wondering where it all went.",
        different: 'If I had more time, or if I go back to it some day, I would like to add the option for Google authentication as well as other login domains. I would also like to add more security around the budgets and more detail to the user.',
        webLink: 'https://github.com/kinzaahmed-web/budgettracker'
      },
      {
        url: "target-store-capacity-tracker",
        backgroundImg: "assets/projects/target.jpg",
        name:"Target Store Capacity Tracker",
        video: {
          videoTitle: 'Store Capacity Tracker',
          videoUrl: 'https://www.youtube.com/embed/1CJ_k-nZGsU',
        },
        problem: "I participated in a Target Hackathon where we were given a problem 'Solve a problem you see in your community and how Target could help solve that problem.' We were given less than 48 hours to come with a solution and grouped in teams of 3-4 people. ",
        myApproach: 'At the time COVID-19 had just been introduced and we had recently gone into lock down. My team and I wanted to present a solution that we saw a lot of local communities were facing. The solution we came up with is this Target Store Capacity Tracker. This is an android app with an interactive map to increase transparency for Target’s Guests. Taking a deeper dive into what our app features. The app is a map of nearby Target stores that can be filtered down by Store Occupancy of course, as well as other services like Curbside pickup, as well as availability of high demand products, say if customers were specifically looking to buy hand sanitizer. We also wanted to implement an estimated Wait Time to increase visibility for Target shoppers In terms of making this app easy-to-use as part of its User Experience, we thought displaying store occupancy, using stoplight colors would be intuitive. And finally, as every map should have, implementing the physical navigation to the brick-and-mortar store.',
        technologies: 'Considering we had a little less than 48 hours to come up with something, we programmed a quick web application using technologies like HTML, Materialize CSS, ReactJS, and SQL Database. For our prototype, we mentioned if we had time to build it out we would use Android Kotlin and integrate Google Maps API  with our application. <br></br><img src="https://img.icons8.com/nolan/64/html.png"/> <img src="https://img.icons8.com/nolan/64/css-filetype.png"/> <img src="https://img.icons8.com/nolan/64/react-native.png"/> <img src="https://img.icons8.com/nolan/64/sql.png"/>',
        challenges: 'A challenge we ran in to was trying to make sure that our idea was not already used and also it was something that would be of benefit to Target and the local communities. So coming up with the idea was probably the hardest part, but once we started talking about problems we have all faced, we came to a conclusion of making the store capacity tracker.',
        results: 'We presented our prototype to the judges, Target software developers, and they were all highly impressed. They asked us a few questions about specific technologies and then also additional capabilities and we answered all of them. Once the judges had made their decisions the winners were announced, my team and I won not one but two awards from the hackathon as Overall Winner of the hackathon and Most Technically Challenging. It was a great experience and I ended up landing a SWE internship at Target as well!',
        different: "Considering we had under 48 hours to program and present an idea or prototype, we didn't have much time to think about other additional capabilities. But if I we did have more time some things we might want to consider are automating the store entry/exit headcount which would make the updating of those numbers in our database a lot easier. We could also try to predict future store occupancy and wait times using machine learning. This feature could be integrated directly on the target app and web application for accessibility purposes. ",
      },
      {
        url: "smart-mirror",
        backgroundImg: "assets/projects/mirror.jpg",
        name:"Smart Mirror",
        video: {
          videoTitle: 'Smart Mirror',
          videoUrl: 'https://www.youtube.com/embed/Tw2ILiacONo',
        },
        problem: 'In my last project, Target Store Capacity tracker, I mentioned how my team and I won the hackathon. All of us were gifted really cool prizes, like a monitor, and Bluetooth wireless speaker, and raspberryPi. My only problem was, what do I do with this stuff and how can I make the most out of it?',
        myApproach: "If you're not familiar with a raspberryPi, I recommend looking into it but in short, a raspberry Pi is a single motherboard computer that can be plugged into a monitor. The raspberry Pi’s operating system is a linux distribution called Raspbian. I wanted to create something useful my family would like. This is where I did some research and ended up creating a smart mirror. This smart mirror displays information like daily news, prayer times, weather, stock prices, and much more! This smart mirror is displayed in my family room where my family has a chance to read the news, be notified of the next prayer time, or to look at the weather!",
        technologies: 'I programmed and installed all modules in JavaScript and got more familiar to linux and its commands. I also got more familiar with API keys for fetching data like weather and stock prices. I used MagicMirror which is a downloadable platform that already has the critical dependencies needed for the project. Once that was downloaded I started modifying the modules specific to my project. <br></br><img src="https://img.icons8.com/nolan/64/javascript.png"/>',
        challenges: 'A challenge I ran into was trying to make sure I add things that are important to my family and I. I also wanted to be able to utilize the speakers given to me as well. I ended up modifying an existing prayer time module which allowed me to play the athan, call to prayer, when it was time to pray. As well as connect spotify and listen to podcasts and be able to control that through my phone. This allowed me to have the mirror display things my family would really enjoy looking at.',
        results: 'The smart mirror was a really fun project and I got to learn so much. My dad and I built the frame from scratch as well and assembled the whole project. It was a great project and I ended up introducing this project to a group of interns at one of my internships and we ended up creating one for the company and I was the technical lead for that project.',
        different: 'Since this mirror is within the comfort of my home, I can update it at any time. But things I would like to add are crypto modules, and alexa!',
      },
      {
        url: "task-master",
        backgroundImg: "assets/projects/task.jpg",
        name:"Task Master",
        video: {
          videoTitle: 'Task Master',
          videoUrl: 'https://www.youtube.com/embed/WgwpSpuIlg4',
        },
        problem: 'Learning about Computer Science was great but as my first programming project, I wanted to challenge myself and create something that would be useful to me and other users who access my project.',
        myApproach: "I love lists and writing things down and checking off things as you go about your day. It allows me to feel productive. That being said, I knew a Task Master would be a great way of managing all of my tasks throughout the day or week and updating it as I go about my day. So I programmed a website that helps users keep track of their to-do's throughout the day!",
        technologies: "It was my first time dealing with front end and back end so my front end wasn't the greatest, sorry! I ended up using basic HTML, CSS and then using Flask which is a python based web framework. I also used SQL database to store tasks. <br></br><img src='https://img.icons8.com/nolan/64/html.png'/> <img src='https://img.icons8.com/nolan/64/css-filetype.png'/> <img src='https://img.icons8.com/nolan/64/python.png'/> <img src='https://img.icons8.com/nolan/64/flask.png'/> <img src='https://img.icons8.com/nolan/64/sql.png'/>",
        challenges: 'A challenge I ran into was trying to make sure I was updating my tasks and sending the correct requests in the API calls. I wanted things to look seamless as possible on the front end. ',
        results: 'I ended up successfully programming the task master and it was a really great and useful way to get into programming projects!',
        different: 'If I had time to go back and fix this project up a bit I would work on the front end nervous laugh we all know that needs some work!',
        webLink: 'https://github.com/kinzaahmed-web/FlaskTaskMaster',
      },
      {
        url: "personal-portfolio",
        backgroundImg: "assets/projects/portfolio.png",
        name:"Personal Portfolio",
        video: {
          videoTitle: 'Personal Portfolio',
          videoUrl: 'https://www.youtube.com/embed/eNFQFmDILCk',
        },
        problem: 'My first ever exposure to HTML, CSS, and JavaScript was through this online Harvard CS50 course I took one summer. It gave me a good understanding on how the languages worked and basics. I wanted to put my skills to the test and build a personal portfolio. The video shows my <a href="https://github.com/kinzaahmed-web/PersonalPortfolio" target="_blank">first personal portfolio</a>. The site you are on right now, is the updated version of that site. ',
        myApproach: "I wanted to make sure that the people who would go on my website would have a seamless experience and could get all the information they needed. I wanted to add specific information about my background, who I am, and what experiences I have. ",
        technologies: 'Since it was my first time dealing with front end after the course, I went pretty light in terms of JavaScript by adding a few functionalities that I thought were really cool and also used HTML and CSS. I have now updated my portfolio site to use Angular. <br></br><img src="https://img.icons8.com/nolan/64/html.png"/> <img src="https://img.icons8.com/nolan/64/css-filetype.png"/> <img src="https://img.icons8.com/nolan/64/javascript.png"/> <img src="https://img.icons8.com/nolan/64/angularjs.png"/>',
        challenges: 'A challenge I ran into was making sure there was something the users could interact with on my website. I ended up using the skills refresh as a way for users to interact and load that as well as adding a light/dark mode option. ',
        results: "I ended up creating the website and deploying it to github. Since it was my first time making a website I want to go back and update things which is why I made this website you're on right now! Feel free to explore the other sections and give me feedback and/or suggestions on how I can make this even better!",
        different: 'Since I did have time to go back and create a new website this year, I think I want to make sure I can continually update and add cool features to this website!',
        webLink: 'https://github.com/kinzaahmed-web/PortfolioWebsite',
      },
    ]
  }
}
