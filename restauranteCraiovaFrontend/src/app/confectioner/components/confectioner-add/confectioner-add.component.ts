import {Component, OnInit} from '@angular/core';
import {Confectioner} from '../../model/confectioner';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfectionerService} from '../../service/confectioner.service';

@Component({
  selector: 'app-confectioner-add',
  templateUrl: './confectioner-add.component.html',
  styleUrls: ['./confectioner-add.component.css']
})
export class ConfectionerAddComponent implements OnInit {
  confectioner: Confectioner = new Confectioner();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private confectionerService: ConfectionerService) {
  }

  ngOnInit(): void {
  }

// tslint:disable-next-line:typedef
  getAll() {
    this.router.navigate(['confectionerList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.confectionerService.save(this.confectioner).subscribe(this.getAll);
  }
}
