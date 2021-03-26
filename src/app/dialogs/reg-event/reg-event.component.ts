import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'src/services';
import { RegisterEventApi } from '../../apis';
import _ from 'lodash';

@Component({
  selector: 'app-reg-event',
  templateUrl: './reg-event.component.html',
  styleUrls: ['./reg-event.component.scss']
})
export class RegEventComponent {
  constructor(private modal: NgbActiveModal, private toastr: ToastrService, private api: RegisterEventApi) {
    console.log(this.post);
  }

  post: any
  name: string
  email: string
  phone: string
  model: any = {};

  reg() {
    console.log(this.post);
    this.model.event_code = _.get(this.post, 'id');
    this.api.post('create', this.model).then(() => {
      this.toastr.success(`Đăng ký sự kiện '${this.post.name}' thành công.`)
    }, () => {
      this.toastr.error(`Đăng ký sự kiện '${this.post.name}' không thành công.`)
      return; 
    })

    // this.toastr.success(`Đăng ký sự kiện '${this.post.name}' thành công.`)
    // this.modal.close();
  }

  close() {
    this.modal.dismiss()
  }
}
