import { Component, OnInit } from '@angular/core';
import { AppModule } from '../../app.module';
import { AsyncPipe, NgForOf, NgIf, TitleCasePipe } from '@angular/common';
import { CreateProductComponent } from '../../components/create-product/create-product.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    AppModule,
    AsyncPipe,
    CreateProductComponent,
    FilterPipe,
    ModalComponent,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    TitleCasePipe,
    FormsModule,
  ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  title = 'angular-first';
  products: IProduct[] = [];
  // products$: Observable<IProduct[]>;
  loading = false;
  term = '';

  constructor(public productsService: ProductsService, public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false),
    // );
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    });
  }
}
