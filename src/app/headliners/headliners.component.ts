import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-headliners',
  templateUrl: './headliners.component.html',
  styleUrls: ['./headliners.component.css']
})
export class HeadlinersComponent {


  @ViewChild('carousel', { static: true }) carousel?: ElementRef<HTMLDivElement>;


  nextCarousel(){
    const carouselElement = this.carousel?.nativeElement;
    if (carouselElement) {
      const divElement = carouselElement.getElementsByTagName('div')[0];
      if (divElement) {
        const itemWith = divElement.clientWidth;
        carouselElement.scrollLeft += itemWith;
      }
    }
}
previousCarousel(){
  const carouselElement = this.carousel?.nativeElement;
  if (carouselElement) {
    const divElement = carouselElement.getElementsByTagName('div')[0];
    if (divElement) {
      const itemWith = divElement.clientWidth;
      carouselElement.scrollLeft -= itemWith;
    }
  }
}



}
