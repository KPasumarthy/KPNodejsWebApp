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

}
