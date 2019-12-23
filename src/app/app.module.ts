import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { ImageCardComponent } from './image-card/image-card.component';
import {ImageGalleryModule} from './image-gallery/image-gallery.module';
import {GalleryConfig} from './image-gallery/token';

@NgModule({
    declarations: [
        AppComponent,
        // ImageCardComponent
    ],
  imports: [
    BrowserModule,
    ImageGalleryModule,
  ],
    providers: [
      {provide: GalleryConfig, useValue: 2}
    ],
    // exports: [
    //     ImageCardComponent
    // ],
    bootstrap: [AppComponent]
})
export class AppModule { }
