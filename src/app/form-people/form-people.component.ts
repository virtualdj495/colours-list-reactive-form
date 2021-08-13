import { Component, OnInit, ViewChildren } from '@angular/core';
import { Person } from '../people';

@Component({
  selector: 'app-form-people',
  templateUrl: './form-people.component.html',
  styleUrls: ['./form-people.component.css']
})
export class FormPeopleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formDetail: Array<string> = [ '' , '' , '' , '' , '' , '' ];
  listOfWarnings: Array<string> = [];

  listOfPeople: Array<Person> = [];

  testForm(): void {
    this.listOfWarnings = [];
    let control = false;
    for (let i = 0 ; i < this.formDetail.length ; i ++) {
      if (this.formDetail[i] === '') {
        this.listOfWarnings.push(document.getElementById(i.toString())!.innerHTML.slice(0,-1) + ' is empty');
        control = true;
      }
    }
    if (isNaN (Number (this.formDetail [2] ))) {
      this.listOfWarnings.push ('Age must be written with digits');
      control= true;
    }
    if (this.formDetail [5][0] !== '0' && this.formDetail [5] !== '' ) {
      console.log('click');
      this.listOfWarnings.push ('Invalid Number');
      control = true;
    }
    else {
      for (let i = 1 ; i < this.formDetail [5].length ; i ++ ) {
        if (isNaN (Number (this.formDetail [5][i] ))) {
          this.listOfWarnings.push ('Invalid Number');
          control=true;
          break;
        }
      }
    }
    if (control === false) {
      this.listOfPeople.push({
                              name: this.formDetail [0],
                              surname: this.formDetail [1],
                              age: this.formDetail [2],
                              city: this.formDetail [3],
                              ocupation: this.formDetail [4],
                              number: this.formDetail [5]
                              });
      this.formDetail = [ '' , '' , '' , '' , '' , '' ];
    }
  }

}
