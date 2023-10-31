import { Injectable } from '@angular/core';
import {restaurante} from './restaurante.model'

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {
  restaurantes: restaurante [] =[
    {
      id:'1',
      imageURL: 'https://marketplace.canva.com/EAFVq1ge0ZU/1/0/1600w/canva-logo-restaurante-circular-sencillo-negro-blanco-QEgdJHSl6GE.jpg',
      name: 'Grill House',
      tenedores: '2',
      descripcion: 'Restaurante de carnes',
      comentarios: ['Muy buena mano en la cocina. Buen sitio para comer carne']
    },
    {
      id:'2',
      imageURL: 'https://marketplace.canva.com/EADh4noNtS8/2/0/1600w/canva-logotipo-de-restaurante-en-negro-con-olla-6ParZzMFAk0.jpg',
      name: 'Humo Sabroso',
      tenedores: '1',
      descripcion: 'Restaurante de productos ahumados',
      comentarios: ['Sitio correcto. Calidad baja pero precios reducidos']

    },
    {
      id:'3',
      imageURL: 'https://www.zarla.com/images/zarla-bacalao-va-1x1-2400x2400-20220201-gdx3fqkbp9xffx6dd9gj.png?crop=1:1,smart&width=250&dpr=2',
      name: 'Bacalao Va',
      tenedores: '3',
      descripcion: 'Restaurante de pescados',
      comentarios: ['Muy buena restaurante. Muy alta calidad de producto']
    },
    {
      id:'4',
      imageURL: 'https://www.sosfactory.com/wp-content/uploads/2016/12/restaurant-logo-mr-bolat.png',
      name: 'Mr Bolat',
      tenedores: '3',
      descripcion: 'Restaurante gourmet de comida turca',
      comentarios: ['Mejor restaurante de comida turca de la ciudad']

    }
  ]
  constructor() { }
  getRestaurantes() {
    return [...this.restaurantes]
  }
  getRestaurante(restauranteID: string) {
    return {
      ...this.restaurantes.find(restaurante => {
        return restaurante.id===restauranteID})
    }
  }
  addRestaurante(imageURL: string, name: string, tenedores: string, descripcion: string) {
    this.restaurantes.push({
      imageURL,
      name,
      tenedores,
      descripcion,
      comentarios: [],
      id: (this.restaurantes.length+1).toString()
    })
  }

  deleteRestaurante(restauranteID: string) {
    this.restaurantes=this.restaurantes.filter(restaurante =>{
      return restaurante.id != restauranteID
    })
  }

}
