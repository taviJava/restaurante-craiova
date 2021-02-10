import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import XyzSource from 'ol/source/XYZ';
import TileLayer from 'ol/layer/Tile';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import {fromLonLat} from 'ol/proj';
import {ActivatedRoute, Router} from '@angular/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-super-gallery/dist/angular-super-gallery.css';
import 'jquery';
import 'angular';
import 'bootstrap';
import 'angular-animate';
import 'angular-touch';
import 'screenfull';
import {ImgObj} from '../../../restaurants/model/img-obj';
import {Accommodation} from '../../model/accommodation';
import {AccommodationService} from '../../service/accommodation.service';

@Component({
  selector: 'app-view-accommodation',
  templateUrl: './view-accommodation.component.html',
  styleUrls: ['./view-accommodation.component.css']
})
export class ViewAccommodationComponent implements OnInit {
  imageObject: ImgObj[] = [];
  latitude;
  longitude;
  map: Map;
  vectorSource: VectorSource;
  vectorLayer: VectorLayer;
  xyzSource: XyzSource;
  tileLayer: TileLayer;
  view: View;
  marker: Feature;
  iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 0.5],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: 'assets/map/mapSymbol.PNG',
    }),
  });
  accommodation: Accommodation = new Accommodation();
  id: number;
  photos: Observable<any>;

  constructor(private restService: AccommodationService,
              private  route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.imageObject = [];
    this.id = this.route.snapshot.params.id;
    this.accommodation = new Accommodation();
    this.restService.getById(this.id).subscribe(result => {
      this.accommodation = new Accommodation();
      this.accommodation = result;
      console.log(this.accommodation.website);
      this.marker = new Feature({
        geometry: new Point(fromLonLat([this.accommodation.longitude, this.accommodation.latidude]))
      });
      this.marker.setStyle(this.iconStyle);

      this.vectorSource = new VectorSource({
        features: [this.marker]
      });

      this.vectorLayer = new VectorLayer({
        source: this.vectorSource
      });

      // XYZ
      this.xyzSource = new XyzSource({
        url: 'http://tile.osm.org/{z}/{x}/{y}.png'
      });

      this.tileLayer = new TileLayer({
        source: this.xyzSource
      });

      // View and map
      this.view = new View({
        center: fromLonLat([this.accommodation.longitude, this.accommodation.latidude]),
        zoom: 14
      });

      this.map = new Map({
        target: 'map',
        layers: [this.tileLayer, this.vectorLayer],
        view: this.view
      });
    });
    this.photos = this.restService.getAccommodationphotos(this.id);
    this.photos.subscribe(result => {
      for (const photo of result) {
        const img: ImgObj = new ImgObj();
        img.image = photo.url;
        img.thumbImage = photo.url;
        img.title = photo.name;
        img.alt = 'Image alt';
        this.imageObject.push(img);
      }
    });
  }
}
