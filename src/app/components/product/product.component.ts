import { Component, Input } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product: IProduct;
  more: boolean = false;
}
