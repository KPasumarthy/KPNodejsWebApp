import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service'; 
import { AppRoutingModule }     from './routes/app-routing.module';
 
import { AppComponent }         from './components/app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { MongoDBNoSqlComponent}     from './mongodbnosql/mongodbnosql.component';
import { MongoDBNoSqlService}    from './mongodbnosql/mongodbnosql.service';
import { MySQLDBComponent } from './mysqldb/mysqldb.component';
import { MySQLDBService } from './mysqldb/mysqldb.service';
import { DemoService }          from './services/demo.service';
import { HeroService }          from './services/hero.service';
import { OracledbComponent } from './oracledb/oracledb.component';
import { OracleDBService}        from './oracledb/oracledb.service';
import { TopNavBarComponent } from './bootstrap/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './bootstrap/footer/footer.component';
import { BlogComponent } from './bootstrap/blog/blog.component';
import { PrimitivesComponent } from './bootstrap/primitives/primitives.component';
import { NgxPaginationModule } from 'ngx-pagination'
import { JwPaginationComponent } from 'jw-angular-pagination';
import { PaginationComponent } from './pagination/pagination.component';

//import { BsModalRef } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './bootstrap/modal/modal.component';
import { KpwebapisComponent } from './kpwebapis/kpwebapis.component';
import { KPWebApisService } from './kpwebapis/kpwebapis.service';
import { SimpleModalModule } from 'ngx-simple-modal';
import { SimpleModComponent } from './simplemod/simplemod.component';
import { SimpleModalService } from "ngx-simple-modal";
import { EloquaComponent } from './eloqua/eloqua.component';



//import {OracledbModule}  from  './oracledb/oracledb.module.tst';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    HttpClientModule,
    SimpleModalModule.forRoot({container: 'modal-container'})

    //BrowserAnimationsModule
 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //// KP : Receiving the 404 Errors due to "HttpClientInMemoryWebApiModule"
    // The reason is because your app.module is importing HttpClientInMemoryWebApiModule, which intercepts any HTTP calls. Instead of trying to get the JSON from your project, it is instead trying to get it from the InMemoryDataService.
    // If you remove this import, it should solve the error, although any calls you have that rely on that module will then fail (such as the school, and national requests).
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    MongoDBNoSqlComponent,
    OracledbComponent,
    TopNavBarComponent,
    FooterComponent,
    BlogComponent,
    PrimitivesComponent,
    JwPaginationComponent,
    PaginationComponent,
    ModalComponent,
    KpwebapisComponent,
    SimpleModComponent,
    MySQLDBComponent,
    EloquaComponent
    //DemoService
  ],
  //providers: [DemoService], //KP : DemoService - A Working Provider
  providers: [DemoService, HeroService, MongoDBNoSqlService, OracleDBService, 
              MySQLDBService, BsModalService, KPWebApisService, SimpleModalService],
  //providers: [DemoService, HeroService, MongoDBNoSqlService, OracleDBService],
  bootstrap: [ AppComponent ],
  entryComponents : [ModalComponent, SimpleModComponent]
})
export class AppModule { }