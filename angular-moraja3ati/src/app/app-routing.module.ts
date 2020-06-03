import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { MaterialListComponent } from './components/materials/material-list/material-list.component';


const routes: Routes = [

 { path: '', redirectTo: 'home', pathMatch: 'full' }, 
 { path: 'home', component: HomeComponent},
 { path: 'material-list', component: MaterialListComponent},
 { path: '**', component: ErrorsComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
