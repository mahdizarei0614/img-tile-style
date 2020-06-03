import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgTileStyleComponent } from './img-tile-style/img-tile-style.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgTileStyleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
