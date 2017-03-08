import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-maker',
  templateUrl: './maker.component.html',
  styleUrls: ['./maker.component.scss']
})
export class MakerComponent {
  @Input() makers;
  @Output() makerSelected = new EventEmitter();

  onSelect(event): void {
    this.makerSelected.emit(event.target.value);
  }
}
