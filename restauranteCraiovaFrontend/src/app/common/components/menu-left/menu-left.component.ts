import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent implements OnInit {
  constructor(private router: Router) { }
   key = '';
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  goToSearch(){
    this.router.navigate(['']).then(r => this.router.navigate(['search/' + this.key]));
    // this.router.navigate(['search/' + this.key]);
  }
}
