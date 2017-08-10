import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';

import * as moment from 'moment';
import * as momentz from 'moment-timezone';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




  t1:any;
  t2:any;
  t3:any;
  t4:any;
  t5:any;
  t6:any;
  t7:any;
  t8:any;
  t9:any;

  constructor(public navCtrl: NavController ,public moment1: MomentModule ) {
   }
//this.moment.format('MMMM Do YYYY, h:mm:ss a');





  public refreshDetatils()
  {
console.log('called');


    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  this.t1=moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(moment.locale());   
this.t2=moment().format('Z');
this.t3=moment(1369266934311).utcOffset(60).format('YYYY-MM-DD HH:mm');
this.t4=momentz.tz().zoneName();
console.log(moment(1369266934311).utcOffset(60).format('YYYY-MM-DD HH:mm'));
console.log(momentz.tz().zoneName());

var time    = momentz.tz("2014-06-01 12:00", "America/New_York");

/*  

moment(1369266934311).zone(-60).format('YYYY-MM-DD HH:mm')
moment(1369266934311).zone('+0100').format('YYYY-MM-DD HH:mm')


moment(1369266934311).tz('America/Phoenix').format('YYYY-MM-DD HH:mm')


*/

  }



}
