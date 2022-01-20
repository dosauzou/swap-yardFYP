import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserServiceService } from './services/user-service.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { UploadComponent } from './components/upload/upload.component';
import { FormsModule } from '@angular/forms';
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProfileComponent } from './components/profile/profile.component';
import { WebcamComponent, WebcamModule } from 'ngx-webcam';
import { WebcamCaptureComponent } from './components/webcam-capture/webcam-capture.component';
import { ItemComponent } from './components/item/item.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';  
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import { MaterialModule } from './material.module';
import { AppService } from './services/app-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
  Observable<HttpEvent<any>> {
    console.log('Intercepted request' + req.url);
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    UploadComponent,
    ImageGridComponent,
    ProfileComponent,
    WebcamCaptureComponent,
    ItemComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatGridListModule,
    WebcamModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    NgImageSliderModule,
    MaterialModule
    
  ],

  providers: [
    UserServiceService, AppService, 
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}},
    //interceptor works fine
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

