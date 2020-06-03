import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialListComponent } from './components/materials/material-list/material-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialService } from './services/material.service';

@NgModule({
  declarations: [
    AppComponent,
    MaterialListComponent,
    HeaderComponent,
    FooterComponent,
    ErrorsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MaterialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
