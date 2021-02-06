import {Component, OnInit} from '@angular/core';
import {WeddingBand} from '../../../weddingBand/model/wedding-band';
import {WeddingBandService} from '../../../weddingBand/service/wedding-band.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Restaurant} from '../../model/restaurant';
import {RestaurantService} from '../../service/restaurant.service';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent implements OnInit {
  restaurant: Restaurant;
  selectedPhotos: FileList;
  pozeLista: File[] = [];
  currentPhoto: File;
  progress = 0;
  message = '';
  photos: Observable<any>;
  selectedFiles: FileList;
  currentFile: File;
  progressInfos = [];
  // preview photo
  fileData: File = null;
  previewUrl: any = null;
  previewsUrl: any[] = [];

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.restaurant = new Restaurant();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.restaurantService.save(this.restaurant).subscribe(data => {
      this.uploadPhotos();
      setTimeout(() => {
        this.getAll();
      },
      5000);
    });
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.router.navigate(['restaurantList']);
  }

  // tslint:disable-next-line:typedef
  selectFile(event) {
    this.selectedFiles = event.target.files;
    this.fileProgress(event);
  }

  // tslint:disable-next-line:typedef
  fileProgress(fileInput: any) {
    this.fileData = (fileInput.target.files[0] as File);
    this.preview();
  }

  // tslint:disable-next-line:typedef
  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    // tslint:disable-next-line:variable-name
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    };
  }

  // tslint:disable-next-line:typedef
  onItemSelect(item: any) {
    console.log(item);
  }

  // tslint:disable-next-line:typedef
  onSelectAll(items: any) {
    console.log(items);
  }

  // tslint:disable-next-line:typedef
  // upload() {
  //   this.progress = 0;
  //   this.currentFile = this.selectedFiles.item(0);
  //   this.restaurantService.upload(this.currentFile).subscribe(
  //     event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         this.progress = Math.round(100 * event.loaded / event.total);
  //       } else if (event instanceof HttpResponse) {
  //         this.message = event.body.message;
  //         const a = event.body.id;
  //       }
  //     },
  //     err => {
  //       this.progress = 0;
  //       this.message = 'Could not upload the file!';
  //       this.currentFile = undefined;
  //     });
  // }
  uploadPhotos(): void {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload2(i, this.selectedFiles[i]);
    }
  }

  upload2(idx, file): void {
    this.progressInfos[idx] = {value: 0, fileName: file.name};

    this.restaurantService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.photos = this.restaurantService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].percentage = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }
}
