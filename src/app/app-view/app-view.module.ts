import {NgModule} from '@angular/core';
import {HomePageComponent} from './components/home-page/home-page.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [HomePageComponent],
  exports: [
    HomePageComponent,
  ],
  imports: [
    MaterialModule
  ]
})
export class AppViewModule {
}
