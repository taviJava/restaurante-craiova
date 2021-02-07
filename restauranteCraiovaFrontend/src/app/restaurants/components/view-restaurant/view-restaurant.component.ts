import { Component, OnInit } from '@angular/core';
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

import { fromLonLat } from 'ol/proj';
import {RestaurantService} from '../../service/restaurant.service';
import {Restaurant} from '../../model/restaurant';
@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit {
  latitude = 44.33405;
  longitude = 23.76040;
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
  constructor(private restService: RestaurantService) { }

  ngOnInit(): void {
    this.marker = new Feature({
      geometry: new Point(fromLonLat([ 23.76040 , 44.33405]))
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
      center: fromLonLat([23.76040, 44.33405]),
      zoom: 14
    });

    this.map = new Map({
      target: 'map',
      layers: [this.tileLayer, this.vectorLayer],
      view: this.view
    });
  }
}
