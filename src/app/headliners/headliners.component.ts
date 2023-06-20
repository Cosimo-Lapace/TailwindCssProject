import { Component, ElementRef, ViewChild } from '@angular/core';
import { SingersService } from '../shared/singers.service';

@Component({
  selector: 'app-headliners',
  templateUrl: './headliners.component.html',
  styleUrls: ['./headliners.component.css']
})
export class HeadlinersComponent {


  @ViewChild('carousel', { static: true }) carousel?: ElementRef<HTMLDivElement>;

constructor(private singersService : SingersService){}
singers = this.singersService.singers;
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
