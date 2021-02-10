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
import {ViewRestaurantComponent} from './restaurants/components/view-restaurant/view-restaurant.component';
import {Test1Component} from './test/components/test1/test1.component';
import {Test2Component} from './test/components/test2/test2.component';
import {ViewPizzeriaComponent} from './pizzeria/components/view-pizzeria/view-pizzeria.component';
import {ViewConfectionerComponent} from './confectioner/components/view-confectioner/view-confectioner.component';
import {ViewAccommodationComponent} from './accommodation/components/view-accommodation/view-accommodation.component';
import {ViewWeddingBandComponent} from './weddingBand/components/view-wedding-band/view-wedding-band.component';
import {SearchListComponent} from './search/components/search-list/search-list.component';

const routes: Routes = [{path: '', component: RestaurantListComponent},
  {path: 'addRestaurant', component: RestaurantAddComponent},
  {path: 'addWeddingBand', component: WeddingBandAddComponent},
  {path: 'weddingBandList', component: WeddingBandListComponent},
  {path: 'pizzeriaAdd', component: PizzeriaAddComponent},
  {path: 'pizzeriaList', component: PizzeriaListComponent},
  {path: 'confectionerAdd', component: ConfectionerAddComponent},
  {path: 'confectionerList', component: ConfectionerListComponent},
  {path: 'advertismentAdd', component: AdvertisementAddComponent},
  {path: 'advertismentList', component: AdvertisementListComponent},
  {path: 'accomodationAdd', component: AccommodationAddComponent},
  {path: 'accomodationList', component: AccommodationListComponent},
  {path: 'restaurantList', component: RestaurantListComponent},
  {path: 'restaurant/:id', component: ViewRestaurantComponent},
  {path: 'test', component: Test1Component},
  {path: 'test2', component: Test2Component},
  {path: 'pizzeria/:id', component: ViewPizzeriaComponent},
  {path: 'confectioner/:id', component: ViewConfectionerComponent},
  {path: 'accommodation/:id', component: ViewAccommodationComponent},
  {path: 'weddingBand/:id', component: ViewWeddingBandComponent},
  {path: 'search/:key', component: SearchListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
