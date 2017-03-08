import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent {
  @Input() models;
  @Output() modelSelected = new EventEmitter();

  onSelect(event): void {
    this.modelSelected.emit(event.target.value);
  }
}
