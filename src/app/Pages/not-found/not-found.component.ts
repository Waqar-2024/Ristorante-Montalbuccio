import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

 @Input()  visible: boolean =false
 @Input() notFoundmessage : string = "Nessun risultato trovato"
 @Input() resetLinkText:string="Ripristina"
 @Input() resetLinkroute: string='/menu'
}
