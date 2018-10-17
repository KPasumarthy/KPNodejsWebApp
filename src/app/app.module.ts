/*KP : Import Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';   //KP : FormsModule created <-- NgModel liver here

/*KP : Import Components */
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component'; //KP : HerosComponent created to display 

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
