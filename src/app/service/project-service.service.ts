import { Injectable } from '@angular/core';
import { Project } from '../_model/project';
import { tags } from '../_model/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  project: Project[] = [{
    id: 0,
    name: "Ecom Project",
    summary: "Developed Ecom Applicaton for Sanofi(Life Sciences)",
    desc: "Worked on PDP, PLP, Cart, Checkout, Order History pages. Used angular concepts such as routing, components, modules, directives, state management, etc.",
    projectLink: "",
    pictures: ["./assets/img1.png", "./assets/img2.png", "./assets/img3.png"],
    tags: [tags.ANGULAR, tags.TYPESCRIPT, tags.BOOTSTRAP]
  },
  {
    id: 1,
    name: "Personal Blog",
    summary: "Developed personal blog app to showcase my travelling",
    desc: "Created a personal blog from scratch with HTML, CSS, Javascript. Implemented concepts such as DOM Manipulation, Async data handling, promises, async await, fetch api. Used CSS flex box and grid.",
    projectLink: "",
    pictures: ["../../assets/img1.png", "../../assets/img2.png", "../../assets/img3.png"],
    tags: [tags.HTML, tags.JAVASCRIPT, tags.CSS]
  },
  {
    id: 2,
    name: "Frac Pro OPS",
    summary: "Developed frontend part for a construction company of Fortune 500",
    desc: "Worked on a user story where I had to generate a pdf with all the customer details. Used concepts such as data binding, pdf-gerenrator library, etc.",
    projectLink: "",
    pictures: ["../../assets/img1.png", "../../assets/img2.png", "../../assets/img3.png"],
    tags: [tags.JAVASCRIPT, tags.PYTHON]
  },
  {
    id: 3,
    name: "Portfolio App",
    summary: "Developed personal portfolio showcasing all my projects",
    desc: "Personal Portfolio App made in Angular. Focused on concepts such as reusable components, routing, models/interface, angular forms.",
    projectLink: "",
    pictures: ["../../assets/img1.png", "../../assets/img2.png", "../../assets/img3.png"],
    tags: [tags.HTML, tags.PYTHON, tags.ANGULAR]
  },
  {
    id: 4,
    name: "Java Backend",
    summary: "Developed backend of a client using java Springboot",
    desc: "Developed an API using Java Springboot, used database SQL.",
    projectLink: "",
    pictures: ["../../assets/img1.png", "../../assets/img2.png", "../../assets/img3.png"],
    tags: [tags.JAAV, tags.SPRING]
  },
  {
    id: 5,
    name: "Full Stack Project",
    summary: "Developed full stack project for a client using java and angular",
    desc: "Completed one full stack project where frontend was based on angular and was developing api using java springboot",
    projectLink: "",
    pictures: ["../../assets/img1.png", "../../assets/img2.png", "../../assets/img4.png"],
    tags: [tags.JAAV, tags.ANGULAR, tags.BOOTSTRAP]
  }];

  constructor() { }

  getProjects() {
    return this.project
  }
  getProjectById(id: number) {
    return this.project[id]
  }
  getProjectsByFilter(filterTags: tags[]) {
    if (filterTags.length !== 0) {
      let project1 = this.project.filter(data => {
        return filterTags.every(val => data.tags.includes(val))
      })
      return project1
    }
    else return this.project
  }
}
