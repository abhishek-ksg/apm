import { Component, OnInit } from '@angular/core';

import { IProduct } from './product.interface';
import { ProductService } from '../shared/product.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    public pageTitle: string = 'My Products';
    public imageWidth: number = 50;
    public imageMargin: number = 5;
    public isShowImage: boolean = true;
    public filterdProducts: Array<IProduct> = [];
    public errorMessage: string;

    private products: Array<IProduct> = [];

    private _filterText: string = '';

    get filterText(): string{
        return this._filterText;
    }

    set filterText(filterBy: string) {
        this._filterText = filterBy;
        this.filterdProducts = (this.filterText) ? this.getFilteredProducts() : this.products;
        console.log(this.filterdProducts);
    }

    public toggleImage(): void {
        this.isShowImage = !this.isShowImage;
    }

    private getFilteredProducts(): Array<IProduct> {
        const filterBy: string = this.filterText.toLocaleLowerCase();
        return this.products.filter( (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingsClicked(message: string) {
        this.pageTitle = 'My Products ' + message;
    }

    ngOnInit() {
        this.productService.getProductData()
            .subscribe(
                (products) => {
                    this.products = <Array<IProduct>>products;
                    this.filterdProducts = this.products;
                },
                (error) => this.errorMessage = error
            );
    }

    constructor(private productService: ProductService) {

    }
}
