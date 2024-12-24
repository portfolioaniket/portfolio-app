import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/app/_model/project';
import { tags } from 'src/app/_model/tags';
import { ProjectServiceService } from 'src/app/service/project-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: false
})
export class PortfolioComponent implements OnInit {
  projectData !: Project[]
  isCollapsed: boolean = true

  constructor(private title: Title, private project: ProjectServiceService, private cdr: ChangeDetectorRef) {

  }
  isChecked = Array(9).fill(false)
  reset: boolean = true;

  ngOnInit(): void {
    this.projectData = this.project.getProjects()
    this.title.setTitle("Aniket - Portfolio")
  }
  data = [tags.ANGULAR, tags.BOOTSTRAP, tags.CSS, tags.HTML, tags.JAVASCRIPT, tags.JAAV, tags.PYTHON, tags.SPRING, tags.TYPESCRIPT]
  filterData: tags[] = []
  onChange(d: tags, e: any) {
    if (e.checked) {
      this.filterData.push(d)
    }
    else {
      this.filterData = this.filterData.filter(data => data !== d)
    }
    this.projectData = this.project.getProjectsByFilter(this.filterData)
    this.reset = this.isChecked.some(data => data === true) ? false : true;
  }
  resetIt() {
    this.isChecked = Array(9).fill(false)
    this.filterData = []
    this.projectData = this.project.getProjectsByFilter(this.filterData)
    this.reset = true
  }

}
