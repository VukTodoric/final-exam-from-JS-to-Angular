import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label?: string;
  @Input() backgroundColor?: string;
  @Output() onClick = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}

  onButtonAction() {
    this.onClick.emit();
  }
}
