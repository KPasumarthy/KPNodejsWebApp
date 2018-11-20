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
import { MongodbComponent }     from './mongodb/mongodb.component';
import { DemoService }          from './services/demo.service';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
 
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
    MongodbComponent
    //DemoService
  ],
  providers: [DemoService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }