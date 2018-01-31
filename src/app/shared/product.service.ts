import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import { IProduct } from '../products/product.interface';

@Injectable()
export class ProductService {

    private productsIds: Array<number> = [];

    constructor( private _http: HttpClient) {

    }

    public getAllProductsData(): Observable<Array<IProduct>> {
        return this._http.get<Array<IProduct>>('../../api/products/products.json')
                .catch(this.handleError);
    }

    public getProductData( productId: number ): Observable<{} | IProduct> {
        return this.getAllProductsData()
            .map( ( products: Array<IProduct> ) =>  products.find( (p: IProduct ) => p.productId === productId ) );

    }

    private handleError(error: HttpErrorResponse) {
        return Observable.throw(error.message);
    }
}
