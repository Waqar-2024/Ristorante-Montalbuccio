import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { CartService } from '../../../core/Models/Services/cart/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenavModule, SidenavComponent,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuDisplay: Boolean = true   //this is for menu all pages home etc.. use only less than 700
  togleSideBarComp: Boolean = false // for open and close side nav component
  cartCount: number = 0; // for showing select items in card 

  constructor(private cartService: CartService){
 this.cartCount=this.cartService.getCart().items.length
  }

  ngOnInit(): void {
    // Check window width on component initialization
    if (window.innerWidth < 700) {
      this.menuDisplay = false; // Hide menu on small screens
    }
  }
  openSidBar() {
    this.togleSideBarComp = true //open side bar
  }
  closeSidBar() {
    this.togleSideBarComp = false //close side bar
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event']) // listen the browser width
  onResize(event: any) {
    if (event.target.innerWidth < 700) {
      this.menuDisplay = false; // Hide menu on small screens
    } else {
      this.menuDisplay = true; // Show menu on larger screens
    }
  }




}
