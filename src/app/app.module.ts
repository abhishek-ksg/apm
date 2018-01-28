import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        ProductsListComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
