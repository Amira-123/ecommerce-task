import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../utility/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  name!:string;
  description!:string;
  price!:number;
  image!:File;
  imageName!:string
  @Output() productsList:EventEmitter<Product>=new EventEmitter<Product>();

  selectImage(event:any){

    this.imageName=event.target.value
    let reader= new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(e:any)=>{
      this.image=e.target?.result;
    }
  }
  onAddProduct(){
    this.productsList.emit({
      name:this.name,
      description:this.description,
      image:this.image,
      price:this.price
    })
  }
}
