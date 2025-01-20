import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent {
  @Input() slides: any[] = [] // images got in slides array
  @Input() autoPlay = true // auto play from parent
  currentSlide = 0 //slide start from 0
  faArrowRight = faArrowRight // for set right icon
  faArrowLeft = faArrowLeft // for set left icon
  hidden = false //use for when img change then opacity 0 for second

  ngOnInit() {
    // for autoplay
    if (this.autoPlay == true) {
      setInterval(() => {
        this.next();
      }, 3000)
    }
  }

  // for next image
  next() {
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide)
  }

  // for previous image
  previous() {
    let currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length
    this.jumpToSlide(currentSlide)

  }

  // this method change images based on index
  jumpToSlide(index: any) {
    this.hidden = true;
    setTimeout(() => {
      this.currentSlide = index
      this.hidden = false
    }, 300)
  }
}
