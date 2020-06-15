import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { MaterialdetailAddComponent } from './components/materialdetail/materialdetail-add/materialdetail-add.component';
import { MaterialdetailEditComponent } from './components/materialdetail/materialdetail-edit/materialdetail-edit.component';
import { MaterialdetailIndexComponent } from './components/materialdetail/materialdetail-index/materialdetail-index.component';
import { MaterialIndexComponent } from './components/materials/material-index/material-index.component';
import { MaterialEditComponent } from './components/materials/material-edit/material-edit.component';
import { MaterialAddComponent } from './components/materials/material-add/material-add.component';


const routes: Routes = [
//**************************  material ***************************/
 { path: 'materials', component: MaterialIndexComponent },
 { path: 'materials/create', component: MaterialAddComponent },
 { path: 'materials/:id', component: MaterialEditComponent },
 //**************************  material details *******************/
 { path: 'material-details', component: MaterialdetailIndexComponent },
 { path: 'material-details/create', component: MaterialdetailAddComponent },
 { path: 'material-details/:id', component: MaterialdetailEditComponent },
 
 { path: '', redirectTo: 'home', pathMatch: 'full' }, 
 { path: 'home', component: HomeComponent},
 { path: '**', component: ErrorsComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
