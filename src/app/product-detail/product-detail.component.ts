import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product.interface';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    private productId: number;
    public product: IProduct;
    public errorMessage: string = '';
    public imageWidth: number = 200;
    public starRating: string;

    constructor( private productService: ProductService, private activatedRoute: ActivatedRoute ) {}

    public onRatingsClicked(starRating: string) {
        this.starRating = starRating;
    }

    ngOnInit() {
        this.productId = +this.activatedRoute.snapshot.params['id'];

        this.productService.getProductData(this.productId)
        .subscribe(
            (product) => this.product = <IProduct>product,
            (err) => this.errorMessage = err
        );
    }
}
