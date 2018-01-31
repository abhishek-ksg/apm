import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product.interface';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    public nextDisabled: boolean = false;
    public prevDisabled: boolean = false;

    private productsIds: Array<number> = [];

    constructor( private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router ) {}

    public onRatingsClicked(starRating: string) {
        this.starRating = starRating;
    }

    public goBack() {
        this.router.navigate(['/products']);
    }

    public nextPrevProduct(value: number) {
        const currentProductId: number = +this.product.productId;
        const newProductId: number = this.productsIds[this.productsIds.indexOf(currentProductId) + value];
        if (!newProductId) {
            this.nextDisabled = (value === 1) ? true : false;
            this.prevDisabled = (value === -1) ? true : false;
        }else {
            this.productId = newProductId;
            this.router.navigate(['/products/product', this.productId]);

            this.nextDisabled = (this.productsIds.indexOf(this.productId) === this.productsIds.length) ? true : false;
            this.prevDisabled = (this.productsIds.indexOf(this.productId) === 0) ? true : false;
        }
    }

    ngOnInit() {

        this.productService.getAllProductsData()
        .subscribe(
            (products: Array<IProduct>) => {
                products.forEach( (product) => {
                    this.productsIds.push(+product.productId);
                });
            },
            (error) => this.errorMessage = error
        );

        this.activatedRoute.paramMap.subscribe(params => {
            this.productId = +params.get('id');
            this.productService.getProductData(this.productId)
            .subscribe(
                (product) => this.product = <IProduct>product,
                (err) => this.errorMessage = err
            );
        });
    }
}
