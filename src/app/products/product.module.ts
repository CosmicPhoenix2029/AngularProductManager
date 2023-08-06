import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './products-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { 
        path: 'products', 
        component: ProductListComponent 
      },
       { 
        path: 'products/:id', 
        component: ProductDetailComponent, 
        canActivate: [ProductDetailGuard]
      },
    ]),
  ]
})
export class ProductModule { }
