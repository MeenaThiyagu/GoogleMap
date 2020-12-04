import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressSplitComponent } from './address-split/address-split.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
