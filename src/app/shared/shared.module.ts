import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star-component/star.component';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [
        StarComponent,
        ConvertToSpacePipe
    ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent,
        ConvertToSpacePipe
    ]
})
export class SharedModule {

}

