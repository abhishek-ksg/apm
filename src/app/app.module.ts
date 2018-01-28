import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ProductsListComponent,
        ConvertToSpacePipe
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
