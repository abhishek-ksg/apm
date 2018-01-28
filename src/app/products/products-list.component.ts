import { Component } from '@angular/core';

import { IProduct } from './product.interface';

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
    public pageTitle: string = 'My Products';
    public imageWidth: number = 50;
    public imageMargin: number = 5;
    public isShowImage: boolean = true;
    public filterdProducts: Array<IProduct> = [];

    private products: Array<IProduct> = [{
        'productId': 1,
        'productName': 'Leaf Rake',
        'productCode': 'GDN-0011',
        'releaseDate': 'March 19, 2016',
        'description': 'Leaf rake with 48-inch wooden handle.',
        'price': 19.95,
        'starRating': 3.2,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
        'productId': 2,
        'productName': 'Garden Cart',
        'productCode': 'GDN-0023',
        'releaseDate': 'March 18, 2016',
        'description': '15 gallon capacity rolling garden cart',
        'price': 32.99,
        'starRating': 4.2,
        'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    }];

    private _filterText: string;

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

    constructor() {
        this.filterdProducts = this.products;
        this.filterText = 'cart';
    }
}
