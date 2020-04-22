import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; //KP : Auto-Generated using <ng generate module app-routing --flat --module=app>
/** KP : Additonal Router Modules to be generated */
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MongoDBNoSqlComponent } from '../mongodbnosql/mongodbnosql.component';
import { OracledbComponent } from '../oracledb/oracledb.component';


//KP : Constant Routes
const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},  ////KP:Commented-Out Default Route just to test other routes
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'mongodbnosql', component: MongoDBNoSqlComponent},  
  { path: 'oracledb', component: OracledbComponent}
];

@NgModule({
  imports: [
    //CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [    
  ]
})
export class AppRoutingModule {
}

