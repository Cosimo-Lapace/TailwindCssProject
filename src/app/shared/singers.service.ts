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
    primarysingername:'The Dastrardly Spaniard',
    primarysingerdate:'7pm - Stage Stage',
    secondaysingername: `Jennifer Connelly's Cousin`,
    secondaysingerdate: `8pm - Platform 9 - Main Stage`,
    tertiarysingername:'The Slimy Diamonds',
    tertiarysingerdate:'8pm - Main Stage',
  },
  {
    name: `Golden Quavers`,
    date: '3rd July ',
    hours:'9.30pm',
    stage: ' - Main Stage',
    primarysingername:`Where's All The Pens?`,
    primarysingerdate:'6.30pm - Stage Stage',
    secondaysingername: `Businessman Dave`,
    secondaysingerdate: `7.30pm - Platform 9 - Main Stage`,
    tertiarysingername:'Hell Mit',
    tertiarysingerdate:'8.30pm - Main Stage',
  },
  {
    name: `Sonic Levitation`,
    date: '4th July ',
    hours:'10pm',
    stage: ' - Main Stage',
    primarysingername:`Collie`,
    primarysingerdate:'8pm - Stage Stage',
    secondaysingername: `Dave Billman`,
    secondaysingerdate: `8.30pm - Platform 9 - Main Stage`,
    tertiarysingername:'Hell Mit State',
    tertiarysingerdate:'9pm - Main Stage',
  },
  {
    name: `Collect Point A`,
    date: '5th July ',
    hours:'10pm',
    stage: ' - Main Stage',
    primarysingername:`Collect Point B`,
    primarysingerdate:'8pm - Stage Stage',
    secondaysingername: `Collect Point C`,
    secondaysingerdate: `8.30pm - Platform 9 - Main Stage`,
    tertiarysingername:'Collect Point D',
    tertiarysingerdate:'9pm - Main Stage',
  },
  {
    name: `Laura Can't Eat Day`,
    date: '6th July ',
    hours:'10pm',
    stage: ' - Main Stage',
    primarysingername:`Biagio`,
    primarysingerdate:'8.30pm - Stage Stage',
    secondaysingername: `Can do`,
    secondaysingerdate: `9pm - Platform 9 - Main Stage`,
    tertiarysingername:'Slg',
    tertiarysingerdate:'9.30pm - Main Stage',
  },
  {
    name: `Broken Toaster`,
    date: '7th July ',
    hours:'10.30pm',
    stage: ' - Main Stage',
    primarysingername:`Fix You`,
    primarysingerdate:'8pm - Stage Stage',
    secondaysingername: `Point`,
    secondaysingerdate: `8.30pm - Platform 9 - Main Stage`,
    tertiarysingername:'Cmp',
    tertiarysingerdate:'9pm - Main Stage',
  },







]

  constructor() { }
}
