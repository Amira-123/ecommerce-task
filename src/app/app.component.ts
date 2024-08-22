import { Component } from '@angular/core';
import { Product } from './utility/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecommerce-task';
  products:Product[]=
  [
    {
    name:'product1',
    image:'assets/images/image1.jpg',
    description:"this is first Product",
    price:2000
    },
    {
      name:'product2',
      image:'assets/images/image2.jpg',
      description:"this is first Product",
      price:2000
    },
    {
        name:'product3',
        image:'assets/images/image3.jpg',
        description:"this is second Product",
        price:2000
    },
    {
      name:'product4',
      image:'assets/images/image4.jpg',
      description:"this is third Product",
      price:2000
    },
    {
      name:'product5',
      image:'assets/images/image5.jpg',
      description:"this is first Product",
      price:2000
    },
  ];
addProduct(product:Product){
  console.log(product);
  //not push object
  this.products.push({
    name:product.name,
    description:product.description,
    price:product.price,
    image:product.image
  })
}

}
