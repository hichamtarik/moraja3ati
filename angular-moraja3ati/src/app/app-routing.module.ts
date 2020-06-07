import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { IndexComponent } from './components/materials/index/index.component';
import { CreateComponent } from './components/materials/create/create.component';
import { EditComponent } from './components/materials/edit/edit.component';


const routes: Routes = [
 { path: 'materials', component: IndexComponent },
 { path: 'materials/create', component: CreateComponent },
 { path: 'materials/:id', component: EditComponent },
 
 { path: '', redirectTo: 'home', pathMatch: 'full' }, 
 { path: 'home', component: HomeComponent},
 { path: '**', component: ErrorsComponent } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
