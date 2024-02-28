import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent {

  calcForm = this.formBuilder.group({
    number1: '',
    number2: '',
  });
  result: number = 0;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    const number1 = Number(this.calcForm.get('number1')?.value);
    const number2 = Number(this.calcForm.get('number2')?.value);
    this.result = number1 + number2;
  }
}
