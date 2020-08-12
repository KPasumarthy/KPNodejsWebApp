import { Component } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";

export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
  selector: 'app-simplemod',
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title pull-left">{{modaltitle}}</h4>
      </div>

        <div class="modal-body">
        <p>{{message || 'Are you sure?'}}</p>
        </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" (click)="close()" >Cancel</button>
        <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
      </div>
    </div>
    `,
  //templateUrl: './simplemod.component.html',
  styleUrls: ['./simplemod.component.css']
})
export class SimpleModComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  constructor() {
    super();
  }
  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = true;
    this.close();
  }
}