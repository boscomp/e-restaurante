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
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/557C/9FE3/EE78/5D32/39A2/C0A8/2BB9/C6CD/placa-senal-xSEC738.jpg',
      descripcion: 'Restaurante de carnes',
      comentarios: []
    },
    {
      id:'2',
      imageURL: 'https://marketplace.canva.com/EADh4noNtS8/2/0/1600w/canva-logotipo-de-restaurante-en-negro-con-olla-6ParZzMFAk0.jpg',
      name: 'Humo Sabroso',
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/557C/9E86/5282/9F45/9C09/C0A8/2AB9/12B1/placa-senal-xSEC737_h.jpg',
      descripcion: 'Restaurante de productos ahumados',
      comentarios: ['Sitio correcto.', 'Calidad baja pero precios reducidos.']

    },
    {
      id:'3',
      imageURL: 'https://www.zarla.com/images/zarla-bacalao-va-1x1-2400x2400-20220201-gdx3fqkbp9xffx6dd9gj.png?crop=1:1,smart&width=250&dpr=2',
      name: 'Bacalao Va',
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/5ECD/243E/23BB/A372/AED4/0A0C/6D0E/8D4C/SAC586.JPG',
      descripcion: 'Restaurante de pescados',
      comentarios: ['Muy buena restaurante. Muy alta calidad de producto']
    },
    {
      id:'4',
      imageURL: 'https://www.sosfactory.com/wp-content/uploads/2016/12/restaurant-logo-mr-bolat.png',
      name: 'Mr Bolat',
      tenedores: 'https://www.lasplacas.com/WebRoot/StoreES3/Shops/64043259/5ECD/243E/23BB/A372/AED4/0A0C/6D0E/8D4C/SAC586.JPG',
      descripcion: 'Restaurante gourmet de comida turca',
      comentarios: []

    }
  ]
  constructor() { }
  getRestaurantes() {
    return [...this.restaurantes]
  }
  getRestaurante(restauranteID: string | null): restaurante {
    return {
      ...this.restaurantes.find(restaurante => {
        return restaurante.id===restauranteID})
    }
  }

}
