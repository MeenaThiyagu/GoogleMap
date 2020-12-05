import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressSplitComponent } from './address-split/address-split.component';
import { AutoAddressComponent } from './auto-address/auto-address.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressSplitComponent,
    AutoAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
