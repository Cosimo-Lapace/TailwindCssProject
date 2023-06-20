import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingersService {

  singers= [
    {
    name: `Corduroy Gary`,
    date: '1st July ',
    hours:'9pm',
    stage: ' - Main Stage',
    primarysingername:'Jackie Chaston',
    primarysingerdate:'6pm - Stage Stage',
    secondaysingername: `Jennifer Connelly`,
    secondaysingerdate: `7pm - Platform 9 - Main Stage`,
    tertiarysingername:'The Slimy Diamonds',
    tertiarysingerdate:'8pm - Main Stage',
  },
  {
    name: `Ken's Showing Off Again`,
    date: '2nd July ',
    hours:'9.30pm',
    stage: ' - Main Stage',
  },
  {
    name: `Golden Quavers`,
    date: '3rd July ',
    hours:'9.30pm',
    stage: ' - Main Stage',
  },
  {
    name: `Sonic Levitation`,
    date: '4th July ',
    hours:'10pm',
    stage: ' - Main Stage',
  },
  {
    name: `Collect Point A`,
    date: '5th July ',
    hours:'10pm',
    stage: ' - Main Stage',
  },
  {
    name: `Laura Can't Eat Day`,
    date: '6th July ',
    hours:'10pm',
    stage: ' - Main Stage',
  },
  {
    name: `Broken Toaster`,
    date: '7th July ',
    hours:'10.30pm',
    stage: ' - Main Stage',
  },







]

  constructor() { }
}
