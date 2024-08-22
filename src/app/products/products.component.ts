import { Component, Input } from '@angular/core';
import { Product } from '../utility/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() product!:Product

}
