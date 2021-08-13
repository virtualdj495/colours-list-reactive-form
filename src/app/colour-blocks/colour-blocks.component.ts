import { Component, OnInit } from '@angular/core';
import { Colours , Filter } from '../colour';

@Component({
  selector: 'app-colour-blocks',
  templateUrl: './colour-blocks.component.html',
  styleUrls: ['./colour-blocks.component.css']
})
export class ColourBlocksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colours = Colours;
  selectedColour= Colours[0];
  originalList: Array<string> = [];
  filteredList: Array<string> = [];
  selectedFilters : Array<Filter> = [];

  selectColour(color: string): void {
    this.selectedColour = color;
    this.originalList.push(color);
    this.filteredList.push(color);
    if (this.selectedFilters.length === 0) {
      this.selectedFilters.push({state: true,colour: color});
      return;
    }
    let control = false;
    for (let j = 0 ; j < this.selectedFilters.length ; j ++) {
      if ( this.selectedFilters[j].colour === color) {
        control = true;
      }
    }
    if (control === false) {
      this.selectedFilters.push({state: true,colour: color});
    }
    this.sortByFilters();
  }

  filterColours(select: Filter): void {
    for (let j = 0 ; j < this.selectedFilters.length ; j ++) {
      if (select.colour === this.selectedFilters[j].colour) {
        if (select.state === true){
          this.selectedFilters[j].state = false;
        }
        else {
          this.selectedFilters[j].state = true;
        }
      }
    }
    this.sortByFilters();
  }

  sortByFilters(): void {
    this.filteredList = [];
    for ( let j = 0 ; j < this.originalList.length ; j ++){
      for (let f of this.selectedFilters) {
        if (f.state === false) {
          continue;
        }
        if (f.state === true && f.colour !== this.originalList[j]) {
          continue;
        }
        this.filteredList.push(this.originalList[j]);
      }
    }
  }
}
