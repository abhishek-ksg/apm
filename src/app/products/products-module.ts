import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './services/product.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: 'products', component: ProductsListComponent
            },
            {
                path: 'products/product/:id', component: ProductDetailComponent
            }
        ])
    ],
    declarations: [
        ProductsListComponent,
        ProductDetailComponent
    ],
    providers: [
        ProductService
    ],
    exports: [
        ProductDetailComponent,
        ProductsListComponent
    ]
})
export class ProductsModule {

}
