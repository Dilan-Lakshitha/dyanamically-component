import { Component, EventEmitter, Input, Output } from '@angular/core';

//first we create a component
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() type: string = "success";
  @Output() output=new EventEmitter()
}

