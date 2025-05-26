import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  standalone: false
})
export class ResumeComponent {
  workClicked: boolean = false;
  eduClicked: boolean = false;
  softClicked: boolean = false;
  techClicked: boolean = false;
  constructor(private title: Title, private render: Renderer2) {
    this.title.setTitle("Aniket - Resume")
  }
  resumeDownload() {
    const link = this.render.createElement('a')
    link.setAttribute('href', './assets/latestAngular.pdf')
    link.setAttribute('target', '_blank')
    link.setAttribute('download', 'Resume')
    link.click()
    link.remove()
  }
  show = ">"
  skills = ["HTML", "CSS", "Javascript", "Typescript", "AJAX", "Bootstrap", "NgRx", "RxJS", "C++", "Object Oriented Programming", "Data structures and Algorithms", "MySQL", "Git", "Github", "React", "VS Code", "Python"]
  softSkills = ["Observation", "Decision Making", "Communication", "Multi-tasking"]

}
