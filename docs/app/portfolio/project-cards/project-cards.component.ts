import { Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Project } from 'src/app/_model/project';
import { ProjectModalComponent } from 'src/app/project-modal/project-modal.component';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css'],
  standalone: false
})
export class ProjectCardsComponent {
  @Input() project = {} as Project
  bsModalRef?: BsModalRef
  constructor(private modalService: BsModalService) {

  }
  openModal() {
    const modalOptions: ModalOptions = {
      class: "modal-lg",
      initialState: {
        project: this.project
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions)
  }
}
