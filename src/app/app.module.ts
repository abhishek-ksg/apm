import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {
                path: 'products',
                component: ProductsListComponent
            },
            {
                path: 'welcome',
                component: WelcomeComponent
            },
            {
                path: '',
                redirectTo: 'welcome',
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: 'welcome',
                pathMatch: 'full'
            }
        ], {
            useHash: true
        })
    ],
    declarations: [
        AppComponent,
        ProductsListComponent,
        ConvertToSpacePipe,
        StarComponent,
        WelcomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
