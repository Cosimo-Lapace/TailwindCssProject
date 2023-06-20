import { Component } from '@angular/core';
import { SingersService } from '../shared/singers.service';


@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.css']
})
export class LineupComponent {


  constructor(private singersService : SingersService){}
  singers = this.singersService.singers;




}
