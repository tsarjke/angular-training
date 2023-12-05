import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if (!search.length) return products;
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }

}