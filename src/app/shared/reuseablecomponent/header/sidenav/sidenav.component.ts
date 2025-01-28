import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { BookOrderComponent } from '../../button/book-order/book-order.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatIconModule,RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @Output() closeSideBar = new EventEmitter  /* hold the side bar from parent */

  closeNav() {
    this.closeSideBar.emit() // call the parent method for close sidenavbar component
  }
}
