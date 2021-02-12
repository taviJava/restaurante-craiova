import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {NgSelectModule} from '@ng-select/ng-select';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantAddComponent } from './restaurants/components/restaurant-add/restaurant-add.component';
import { RestaurantListComponent } from './restaurants/components/restaurant-list/restaurant-list.component';
import { PizzeriaAddComponent } from './pizzeria/components/pizzeria-add/pizzeria-add.component';
import { PizzeriaListComponent } from './pizzeria/components/pizzeria-list/pizzeria-list.component';
import { AccommodationListComponent } from './accommodation/components/accommodation-list/accommodation-list.component';
import { AccommodationAddComponent } from './accommodation/components/accommodation-add/accommodation-add.component';
import { AdvertisementAddComponent } from './advertisement/components/advertisement-add/advertisement-add.component';
import { AdvertisementListComponent } from './advertisement/components/advertisement-list/advertisement-list.component';
import { ConfectionerListComponent } from './confectioner/components/confectioner-list/confectioner-list.component';
import { ConfectionerAddComponent } from './confectioner/components/confectioner-add/confectioner-add.component';
import { WeddingBandAddComponent } from './weddingBand/components/wedding-band-add/wedding-band-add.component';
import { WeddingBandListComponent } from './weddingBand/components/wedding-band-list/wedding-band-list.component';
import { NgModule } from '@angular/core';
import { NavbarUpComponent } from './common/components/navbar-up/navbar-up.component';
import { PhotoComponent } from './photos/components/photo/photo.component';
import {NavbarDownComponent} from './common/components/navbar-down/navbar-down.component';
import { MenuLeftComponent } from './common/components/menu-left/menu-left.component';
import {ViewRestaurantComponent} from './restaurants/components/view-restaurant/view-restaurant.component';
import { Test1Component } from './test/components/test1/test1.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { Test2Component } from './test/components/test2/test2.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { ViewPizzeriaComponent } from './pizzeria/components/view-pizzeria/view-pizzeria.component';
import { ViewConfectionerComponent } from './confectioner/components/view-confectioner/view-confectioner.component';
import { ViewAccommodationComponent } from './accommodation/components/view-accommodation/view-accommodation.component';
import {ViewWeddingBandComponent} from './weddingBand/components/view-wedding-band/view-wedding-band.component';
import {SearchListComponent} from './search/components/search-list/search-list.component';
import {RouterModule} from '@angular/router';
import { HttpInterceptorService } from './user/service/http-interceptor.service';
import { UserLoginComponent } from './user/components/user-login/user-login.component';



@NgModule({
  declarations: [
    AppComponent,
    RestaurantAddComponent,
    RestaurantListComponent,
    PizzeriaAddComponent,
    PizzeriaListComponent,
    AccommodationListComponent,
    AccommodationAddComponent,
    AdvertisementAddComponent,
    AdvertisementListComponent,
    ConfectionerListComponent,
    ConfectionerAddComponent,
    WeddingBandAddComponent,
    WeddingBandListComponent,
    NavbarUpComponent,
    PhotoComponent,
    NavbarDownComponent,
    MenuLeftComponent,
    ViewRestaurantComponent,
    Test1Component,
    Test2Component,
    ViewPizzeriaComponent,
    ViewConfectionerComponent,
    ViewAccommodationComponent,
    ViewWeddingBandComponent,
    SearchListComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgSelectModule,
    BrowserModule, Ng2SearchPipeModule,
    BrowserModule, NgxPaginationModule, BrowserAnimationsModule,
    CarouselModule, WavesModule,
    CommonModule, NgImageSliderModule,
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
