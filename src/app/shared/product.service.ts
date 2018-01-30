import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IProduct } from '../products/product.interface';

@Injectable()
export class ProductService {

    constructor( private _http: HttpClient) {

    }

    getProductData(): Observable<{} | Array<IProduct>> {
        return this._http.get<Array<IProduct>>('../../api/products/products.json')
                .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {
        return Observable.throw(error.message);
    }
}
