import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialService } from './services/material.service';
import { MaterialdetailAddComponent } from './components/materialdetail/materialdetail-add/materialdetail-add.component';
import { MaterialdetailEditComponent } from './components/materialdetail/materialdetail-edit/materialdetail-edit.component';
import { MaterialdetailIndexComponent } from './components/materialdetail/materialdetail-index/materialdetail-index.component';
import { MaterialIndexComponent } from './components/materials/material-index/material-index.component';
import { MaterialEditComponent } from './components/materials/material-edit/material-edit.component';
import { MaterialAddComponent } from './components/materials/material-add/material-add.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorsComponent,
    HomeComponent,
    MaterialdetailAddComponent,
    MaterialdetailEditComponent,
    MaterialdetailIndexComponent,
    MaterialIndexComponent,
    MaterialEditComponent,
    MaterialAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    MaterialService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
