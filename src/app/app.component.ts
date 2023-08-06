import { Component } from '@angular/core';
import { ProductListComponent } from './products/products-list.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = "Haydn's Product Management";
}
