import {Component, OnInit} from '@angular/core';
import {Accommodation} from '../../model/accommodation';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AccommodationService} from '../../service/accommodation.service';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-accommodation-add',
  templateUrl: './accommodation-add.component.html',
  styleUrls: ['./accommodation-add.component.css']
})
export class AccommodationAddComponent implements OnInit {
  accommodation: Accommodation = new Accommodation();
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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal,
              private accomodationService: AccommodationService) {
  }

  ngOnInit(): void {
    this.accommodation = new Accommodation();
  }

// tslint:disable-next-line:typedef
  getAccommodation() {
    this.router.navigate(['accomodationList']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.accomodationService.save(this.accommodation).subscribe(data => {
      this.uploadPhotos();
      setTimeout(() => {
          this.getAccommodation();
        },
        5000);
    });
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


  uploadPhotos(): void {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload2(i, this.selectedFiles[i]);
    }
  }

  upload2(idx, file): void {
    this.progressInfos[idx] = {value: 0, fileName: file.name};

    this.accomodationService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.photos = this.accomodationService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].percentage = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }
}
