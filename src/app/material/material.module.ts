import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [],
  exports: [
    MatCardModule
  ],
  imports: [
    MatCardModule,
    HttpClientModule
  ]
})
export class MaterialModule {
}
