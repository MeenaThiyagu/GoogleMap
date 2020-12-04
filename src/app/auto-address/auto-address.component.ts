import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-auto-address',
  templateUrl: './auto-address.component.html',
  styleUrls: ['./auto-address.component.css']
})
export class AutoAddressComponent implements AfterViewInit {

 

@Component({
  selector: 'app-view-suggestions',
  templateUrl: './view-suggestions.component.html',
  styleUrls: ['./view-suggestions.component.css']
})

  @ViewChild('inputAddress', {static: false}) input: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    this.mapInitializer();
  }

  mapInitializer() {
    const autocomplete = new google.maps.places.Autocomplete(this.input.nativeElement);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
  
      let address = "";
  
      if (place.address_components) {
        address = [
          (place.address_components[0] &&
            place.address_components[0].short_name) ||
            "",
          (place.address_components[1] &&
            place.address_components[1].short_name) ||
            "",
          (place.address_components[2] &&
            place.address_components[2].short_name) ||
            "",
        ].join(" ");
      }

      console.log(address)
  
    });


   }

  

}