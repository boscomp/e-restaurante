import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { restaurante } from '../restaurante.model';
import { RestaurantesService } from '../restaurantes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.page.html',
  styleUrls: ['./restaurante-detail.page.scss'],
})
export class RestauranteDetailPage implements OnInit {
  mirestaurante: restaurante= {id:'', imageURL:'', name:'', tenedores:'', descripcion:'', comentarios:[]};
  constructor(private activatedRoute: ActivatedRoute, private restaurantesService: RestaurantesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const recipeId= paramMap.get('restauranteID');
      this.mirestaurante=this.restaurantesService.getRestaurante(recipeId);
    })
  }


}
