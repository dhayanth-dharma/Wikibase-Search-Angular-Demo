import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlackButtonComponent } from './black-button.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [BlackButtonComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [BlackButtonComponent]
})
export class BlackButtonModule { }
