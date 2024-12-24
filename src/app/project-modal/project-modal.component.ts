import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_model/project';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css'],
  standalone: false
})
export class ProjectModalComponent {
  project!: Project
  constructor(public bsModalRef: BsModalRef) {

  }
}
