import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'src/services';

@Component({
  selector: 'app-reg-event',
  templateUrl: './reg-event.component.html',
  styleUrls: ['./reg-event.component.scss']
})
export class RegEventComponent {
  constructor(private modal: NgbActiveModal, private toastr: ToastrService) {
    console.log(this)
  }

  post: any
  name: string
  email: string
  phone: string

  reg() {
    console.log(this)
    // show toast
    this.toastr.success(`Register event ${this.post.name} success`)
    this.modal.close()
  }

  close() {
    this.modal.dismiss()
  }
}
