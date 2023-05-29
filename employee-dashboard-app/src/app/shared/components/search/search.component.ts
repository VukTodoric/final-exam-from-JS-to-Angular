import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() placeholder?: string;
  @Output() searchResult = new EventEmitter<string>();

  defaultValue = '';

  constructor() {}

  ngOnInit(): void {
    const filter = localStorage.getItem('filter');
    if (filter) {
      const filterToString = JSON.parse(filter);
      this.defaultValue = filterToString.userSerch;
    }
  }

  onSearchAction(input: HTMLInputElement) {
    this.searchResult.emit(input.value);
  }

  onChange(input: HTMLInputElement) {
    this.searchResult.emit(input.value);
  }
}
