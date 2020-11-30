import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalService {
  constructor(private modal: NgbModal) {
    
  }
  shown(component) {
    return this.modal.open(component, {
      
    })
  }
}
