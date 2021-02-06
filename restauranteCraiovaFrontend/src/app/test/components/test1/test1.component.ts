import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import VectorSource from 'ol/source/Vector';
import TileJSON from 'ol/source/TileJSON';
import Overlay from 'ol/Overlay';
import Polyline from 'ol/format/Polyline';
// tslint:disable-next-line:prefer-const
let polyline: any;
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  map;
  mapLat = -33.829357;
  mapLng = 150.961761;
  mapDefaultZoom = 2;
  iconFeature = new Feature({
    geometry: new Point([this.mapLng, this.mapLat]),
    name: 'Null Island',
    population: 4000,
    rainfall: 500,
  });
  route = new Polyline({
    factor: 1e6,
  }).readGeometry(polyline, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857',
  });
   iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 0.5],
      anchorXUnits: 'fraction',
      anchorYUnits: 'fraction',
      src: 'assets/map/mapSymbol.PNG',
    }),
  });
  vectorSource = new VectorSource({
    features: [this.iconFeature],
  });
  vectorLayer = new VectorLayer({
    source: this.vectorSource,
  });
  rasterLayer = new TileLayer({
    source: new TileJSON({
      url: 'https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1',
      crossOrigin: '',
    }),
  });
  element = document.getElementById('popup');
  popup = new Overlay({
    element: this.element,
    positioning: 'bottom-center',
    stopEvent: false,
    offset: [0, -50],
  });
  geoMarker = new Feature({
    type: 'geoMarker',
    geometry: new Point(this.route.getCoordinateAt(0)),
  });
  constructor() {
  }

  ngOnInit(): void {
    this.iconFeature.setStyle(this.iconStyle);
    this.map = new Map({
      layers: [this.rasterLayer, this.vectorLayer],
      target: document.getElementById('map'),
      view: new View({
        center: olProj.fromLonLat([this.mapLng, this.mapLat]),
        zoom: this.mapDefaultZoom,
      }),
    });
    this.map.addOverlay(this.popup);
    this.map.addLayer(this.vectorLayer);
    // this.map = new Map({
    //   target: 'map',
    //   layers: [
    //     new TileLayer({
    //       source: new OSM({
    //         url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
    //         features: [({
    //           geometry: (olProj.transform([parseFloat(String(this.mapLng)), parseFloat(String(this.mapLat))], 'EPSG:4326', 'EPSG:3857')),
    //         })]
    //       }),
    //       style: new Style({
    //         image: new Icon({
    //           anchor: [0.5, 0.5],
    //           anchorXUnits: 'fraction',
    //           anchorYUnits: 'fraction',
    //           src: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
    //         })
    //       })
    // })
    //   ],
    //   view: new View({
    //     center: olProj.fromLonLat([this.mapLng, this.mapLat]),
    //     zoom: this.mapDefaultZoom
    //   })
    // });
    // // this.add_map_point(this.mapLat, this.mapLng);
  }

  // tslint:disable-next-line:typedef
  // add_map_point(lat, lng) {
  //   const vectorLayer = new VectorLayer({
  //     source: new VectorLayer({
  //       features: [({
  //         geometry: (olProj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
  //       })]
  //     }),
  //     style: new Style({
  //       image: new Icon({
  //         anchor: [0.5, 0.5],
  //         anchorXUnits: 'fraction',
  //         anchorYUnits: 'fraction',
  //         src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg'
  //       })
  //     })
  //   });
  //   this.map.addLayer(vectorLayer);
  // }
}
