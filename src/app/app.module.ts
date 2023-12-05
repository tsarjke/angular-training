import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { AsyncPipe, CurrencyPipe, DecimalPipe, NgClass, NgIf, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  exports: [
    ProductComponent,
    GlobalErrorComponent
  ],
  declarations: [
    ProductComponent,
    GlobalErrorComponent
  ],
  imports: [
    CurrencyPipe,
    NgOptimizedImage,
    NgIf,
    NgClass,
    DecimalPipe,
    HttpClientModule,
    AsyncPipe,
  ],
  providers: [ProductsService]
})
export class AppModule {
}
