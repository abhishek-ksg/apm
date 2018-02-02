import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products-module';
import { AppRouteModule } from './app-route.module';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        ProductsModule,
        AppRouteModule
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {

}
