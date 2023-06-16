import { Component } from '@angular/core';

@Component({
  selector: 'app-navbarcontent',
  templateUrl: './navbarcontent.component.html',
  styleUrls: ['./navbarcontent.component.css']
})
export class NavbarcontentComponent {

  MobileMenuDropdownChecked = false;

  MobileMenuDropdown(){
    this.MobileMenuDropdownChecked = !this.MobileMenuDropdownChecked;
  }

}
