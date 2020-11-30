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
    
  }

  post: any
  name: string
  email: string
  phone: string

  reg() {
    this.toastr.success(`Đăng ký sự kiện '${this.post.name}' thành công.`)
    this.modal.close()
  }

  close() {
    this.modal.dismiss()
  }
}
