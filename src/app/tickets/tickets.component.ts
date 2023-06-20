import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {

  tickets = [
    {
    day: 'Single day ticket',
    price: '€30',
  },
  {
    day: '7 day ticket',
    price: '€100',
  },

]
}
