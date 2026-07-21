import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  displayValue: string = '';

  onKeyClick(val: string): void {
    if (val === 'clear') {
      this.displayValue = '';
    } 
    else if (val === 'back') {
      this.displayValue = this.displayValue.slice(0, -1);
    } 
    else if (val === 'equal') {
      try {
        if (!this.displayValue) return;
        this.displayValue = String(Function(`'use strict'; return (${this.displayValue})`)());
      } catch {
        this.displayValue = 'Error';
      }
    } 
    else {
      if (this.displayValue === 'Error') {
        this.displayValue = '';
      }
      this.displayValue += val;
    }
  }
}