import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from './restaurantes.service';
import { restaurante } from './restaurante.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.page.html',
  styleUrls: ['./restaurantes.page.scss'],
})
export class RestaurantesPage {
   titulo = "Restaurantes"
   restaurantes: restaurante[]=[];
  constructor(private restaurantesService: RestaurantesService) { }

  ngOnInit() {
    this.restaurantes=this.restaurantesService.getRestaurantes();
  }

}
