import { Injectable } from "@angular/core";
import { IProduct } from "./Product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, map, tap, throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProductService {

    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productUrl)
        .pipe(
            tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    //get a single product by ID
    getProduct(id: number): Observable<IProduct | undefined> {
        return this.getProducts()
        .pipe(
            map((products: IProduct[]) => products.find(p => p.productId === id))
        );
    }

   private handleError(err: HttpErrorResponse): Observable<never> {
        //in a real world app, this function would be used to send the error to some remote logging infrastructure
        //I am logging to the console instead for simplicity
        let errorMessage = "";
        if(err.error instanceof ErrorEvent) {
            //client-side or network error occured
            errorMessage = `an error occured: ${err.error.message}`;
        }
        else {
            //the backend returned an unsuccessful repsonse code
            errorMessage = `Server returned code: ${err.status}, the error message is: ${err.message}`
        }
        console.log(errorMessage);
        return throwError(() => errorMessage);
    }
}