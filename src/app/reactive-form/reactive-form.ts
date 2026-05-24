import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {
  readonly form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required, Validators.minLength(7)]),
  })

  onSubmit(): void {
    console.log(this.form.value);
  }
  onReset(): void {
    this.form.reset();
  }
}
