import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { AgmCoreModule } from '@agm/core';
import { AddressSplitComponent } from './address-split/address-split.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressSplitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyDB9HbdOZFsxjkiA3XaQdezE-Taj21pUQs'})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
