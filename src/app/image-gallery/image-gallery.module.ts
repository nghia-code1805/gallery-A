import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGalleryComponent } from './image-gallery.component';
import {ImageCardComponent} from '../image-card/image-card.component';



@NgModule({
  // declarations: [ImageGalleryComponent],
  imports: [
    CommonModule,
    // AppModule
  ],
  declarations: [ImageGalleryComponent, ImageCardComponent],
  exports: [ImageGalleryComponent]
})
export class ImageGalleryModule { }
