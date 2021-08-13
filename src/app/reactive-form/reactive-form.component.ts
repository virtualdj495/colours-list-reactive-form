import { Component, OnInit } from '@angular/core';
import { FormBuilder, ValidatorFn } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Person } from '../people';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.profileForm.valueChanges.subscribe(val => {

    });

  }
  listOfPeople : Array<Person> = [];

  profileForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    age: ['',[Validators.required ,
              Validators.pattern('[0-9][0-9]')]],
    city: ['', Validators.required],
    ocupation: ['', Validators.required],
    number: ['', [Validators.required,
                  Validators.pattern('[0][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]')]]
  });

  addPersonToTable(): void {
    this.listOfPeople.push(this.profileForm.value);
    this.profileForm.setValue({name:'',
                               surname:'',
                               age: '',
                               city:'',
                               ocupation: '',
                               number: ''});
  }

}
