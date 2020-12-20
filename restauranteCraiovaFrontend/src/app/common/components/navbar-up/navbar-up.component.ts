import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-up',
  templateUrl: './navbar-up.component.html',
  styleUrls: ['./navbar-up.component.css']
})
export class NavbarUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
// tslint:disable-next-line:typedef
goToHome(){
    this.router.navigate(['']);
}
}
