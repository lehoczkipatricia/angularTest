import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VEHICLES } from '../mock-vehicles';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles = VEHICLES;
  id = new FormControl('');
  plate = new FormControl('');
  brand = new FormControl('');
  price = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  on_save_button(){
    let vehicle: Vehicle = {
      id: this.id.value,
      plate: this.plate.value,
      brand: this.brand.value,
      price: this.price.value
    }
    this.vehicles.push(vehicle)
  }


}
