import {NgModule} from '@angular/core';
import {HomePageComponent} from './components/home-page/home-page.component';
import {MaterialModule} from '../material/material.module';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


@NgModule({
  declarations: [HomePageComponent],
  exports: [
    HomePageComponent,
  ],
    imports: [
        MaterialModule,
        MatButtonModule,
        CommonModule,
        MatTableModule,
        MatInputModule,
        ReactiveFormsModule
    ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppViewModule {
}
