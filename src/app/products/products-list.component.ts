import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./Product";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";

@Component({
    templateUrl: "./products-list.component.html",
    styleUrls: ["./products-list.component.css"]
})

export class ProductListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Product List';
    imageWidth: number = 50
    imageMargin: number = 2
    showImage: boolean = false;
    errorMessage: string = "";
    sub!: Subscription;

    constructor(private productService: ProductService) {}

    private _listFilter: string = "";
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(filter: string) {
        this._listFilter = filter;
        //code to filter the data as below
        this.filteredProducts = this.performFilter(filter);
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    ngOnInit(): void {
        this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();   
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string ): IProduct[] {
        //first convert the filter value to lowercase
        filterBy = filterBy.toLowerCase();  
        // now return the filtered list of products:
        return this.products.filter((product: IProduct) =>
            product.productName.toLowerCase().includes(filterBy));
    }

    onRatingClicked(message: string): void {
        this.pageTitle = `Product List: ${message}`;        
    }
}