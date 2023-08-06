import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { starComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    starComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    starComponent,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }