import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/_model/project';
import { ProjectServiceService } from 'src/app/service/project-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit {
  featuredData!: Project
  constructor(private title: Title, private projectData: ProjectServiceService) {
    this.title.setTitle("Aniket - Home")
  }
  ngOnInit(): void {
    this.featuredData = this.projectData.getProjectById(0)
  }
}
