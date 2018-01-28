import { Component } from '@angular/core';
import { ProductService } from './shared/product.service';

@Component({
    selector: 'pm-root',
    templateUrl: './app.component.html',
    providers: [ProductService]
})
export class AppComponent {
    public pageTitle: string = 'Amazon Product Management';
}
