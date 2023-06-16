import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarcontentComponent } from './navbar/navbarcontent/navbarcontent.component';
import { HeaderImageComponent } from './header-image/header-image.component';
import { HeadlinersComponent } from './headliners/headliners.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarcontentComponent,
    HeaderImageComponent,
    HeadlinersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
