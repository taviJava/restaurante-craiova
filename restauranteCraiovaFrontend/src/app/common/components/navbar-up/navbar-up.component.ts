import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar-up',
  templateUrl: './navbar-up.component.html',
  styleUrls: ['./navbar-up.component.css']
})
export class NavbarUpComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
  goToHome() {
    this.router.navigate(['']);
  }

// tslint:disable-next-line:typedef
  changeView(event) {
     if ( event.type === 'mouseover'){
       $('#foa').addClass('active');
     }
     if (event.type === 'mouseout'){
       $('#foa').removeClass('active');
     }
    }
}
