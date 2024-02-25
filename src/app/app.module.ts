import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowInfoComponent } from './show-info/show-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [AppComponent, ShowInfoComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
