import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IProduct } from '../products/product.interface';

@Injectable()
export class ProductService {

    constructor( private _http: HttpClient) {

    }

    getProductData(): Observable<Array<IProduct>> {
        return this._http.get<Array<IProduct>>('../../api/products/products.json')
    }
}
