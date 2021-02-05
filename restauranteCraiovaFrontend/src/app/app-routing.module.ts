import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurants/components/restaurant-list/restaurant-list.component';
import { RestaurantAddComponent } from './restaurants/components/restaurant-add/restaurant-add.component';
import { WeddingBandAddComponent } from './weddingBand/components/wedding-band-add/wedding-band-add.component';
import { WeddingBandListComponent } from './weddingBand/components/wedding-band-list/wedding-band-list.component';
import { PizzeriaAddComponent } from './pizzeria/components/pizzeria-add/pizzeria-add.component';
import { PizzeriaListComponent } from './pizzeria/components/pizzeria-list/pizzeria-list.component';
import { ConfectionerAddComponent } from './confectioner/components/confectioner-add/confectioner-add.component';
import { ConfectionerListComponent } from './confectioner/components/confectioner-list/confectioner-list.component';
import { AdvertisementAddComponent } from './advertisement/components/advertisement-add/advertisement-add.component';
import { AdvertisementListComponent } from './advertisement/components/advertisement-list/advertisement-list.component';
import { AccommodationAddComponent } from './accommodation/components/accommodation-add/accommodation-add.component';
import { AccommodationListComponent } from './accommodation/components/accommodation-list/accommodation-list.component';
import {PhotoComponent} from './photos/components/photo/photo.component';
import {MenuLeftComponent} from './common/components/menu-left/menu-left.component';

const routes: Routes = [{path: '', component: RestaurantListComponent},
  {path: 'addRestauarant', component: RestaurantAddComponent},
  {path: 'addWedding', component: WeddingBandAddComponent},
  {path: 'weddingList', component: WeddingBandListComponent},
  {path: 'pizzeriaAdd', component: PizzeriaAddComponent},
  {path: 'pizzeriaList', component: PizzeriaListComponent},
  {path: 'confectionerAdd', component: ConfectionerAddComponent},
  {path: 'confectionerList', component: ConfectionerListComponent},
  {path: 'advertismentAdd', component: AdvertisementAddComponent},
  {path: 'advertismentList', component: AdvertisementListComponent},
  {path: 'accomodationAdd', component: AccommodationAddComponent},
  {path: 'accomodationList', component: AccommodationListComponent},

 // {path: 'photos', component: PhotoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
