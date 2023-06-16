import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  constructor() {}
  @ViewChild('rotate45right', { static: true }) rotate45right?: ElementRef<HTMLDivElement>;
  @ViewChild('opacity', { static: true }) opacity?: ElementRef<HTMLDivElement>;
  @ViewChild('rotate45left', { static: true }) rotate45left?: ElementRef<HTMLDivElement>;
  mobilebutton(){
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if(this.isMobileMenuOpen){
      this.rotate45right?.nativeElement.classList.add("rotate-45","top-2","relative")
      this.rotate45left?.nativeElement.classList.add("-rotate-45","-top-2","relative")
      this.opacity?.nativeElement.classList.add("opacity-0")
    }else{
      this.rotate45right?.nativeElement.classList.remove("rotate-45","top-2","relative")
      this.rotate45left?.nativeElement.classList.remove("-rotate-45","-top-2","relative")
      this.opacity?.nativeElement.classList.remove("opacity-0")
    }
  }
}
