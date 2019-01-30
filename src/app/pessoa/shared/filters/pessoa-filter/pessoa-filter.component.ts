import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-filter',
  templateUrl: './pessoa-filter.component.html',
  styleUrls: ['./pessoa-filter.component.css']
})
export class PessoaFilterComponent  {

  @Output() changed: EventEmitter<string>;
  @Input() placeholderDescribe: string;
  @Input() filterMask: string = '';

  filter: string;

  constructor() {
    this.changed = new EventEmitter<string>();
  }

  clear() {
    this.filter = '';
  }

  filterChanged(event: any) {
    event.preventDefault();
    this.changed.emit(this.filter);
  }

}
