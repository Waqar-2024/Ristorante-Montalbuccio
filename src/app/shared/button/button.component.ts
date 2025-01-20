import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  // button component for reuse
@Input('button') buton?:string
@ViewChild('button') button? : HTMLButtonElement
}
