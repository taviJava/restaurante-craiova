import {Component, OnInit} from '@angular/core';
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
import {RestaurantService} from '../../service/restaurant.service';
import {Restaurant} from '../../model/restaurant';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-super-gallery/dist/angular-super-gallery.css';
import 'jquery';
import 'angular';
import 'bootstrap';
import 'angular-animate';
import 'angular-touch';
import 'screenfull';
import angularSuperGallery from 'angular-super-gallery';
import * as angular from 'angular';
import {ImgObj} from '../../model/img-obj';

angular.module('app', [angularSuperGallery]);

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {
  imageObject: ImgObj[] = [];
  latitude ;
  longitude ;
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
  resturant: Restaurant = new Restaurant();
  id: number;
  photos: Observable<any>;

  constructor(private restService: RestaurantService,
              private  route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.imageObject = [];
    this.id = this.route.snapshot.params.id;
    this.resturant = new Restaurant();
    this.restService.getById(this.id).subscribe(result => {
      this.resturant = new Restaurant();
      this.resturant = result;
      console.log(this.resturant.website);
      this.marker = new Feature({
        geometry: new Point(fromLonLat([this.resturant.longitude, this.resturant.latidude]))
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
        center: fromLonLat([this.resturant.longitude, this.resturant.latidude]),
        zoom: 14
      });

      this.map = new Map({
        target: 'map',
        layers: [this.tileLayer, this.vectorLayer],
        view: this.view
      });
    });
    this.photos = this.restService.getRestaurantphotos(this.id);
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
