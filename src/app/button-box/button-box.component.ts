import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.scss']
})
export class ButtonBoxComponent implements OnInit {
  @Output() public toggleButtonBox = new EventEmitter();
  @Input() boxNumber:number;

  constructor() { }

  ngOnInit(): void {
  }

  toggleButtonBoxTrigger(buttonVal) {
    this.toggleButtonBox.emit(buttonVal);
  }

}
