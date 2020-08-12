import { Component, OnInit } from '@angular/core';
//import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modaltitle = "NGX Modal";
  modaldata =  ["KP : This is the implementation of NGX Modal"] ;

  constructor(
    public modalRef : BsModalRef
  ) { }

  ngOnInit() {
  }

  confirmNGXModal() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    //this.result = true;
    alert('accepted');
    this.modalRef.hide();
  }
  closeNGXModal() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    //this.result = true;
    alert('declined');
    this.modalRef.hide();
  }



}
