import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(){
    return this.http.get<any>(this.url).pipe(
      catchError(this.handleError)
    );;
  }
  create(post?: any) {
    return this.http.post<any>(this.url, JSON.stringify(post)).pipe(
      catchError(this.handleError)
    );;
  }
  update(post?: any){
    return  this.http.put<any>(this.url+'/'+post.id, JSON.stringify({title: "updated"})).pipe(
      catchError(this.handleError)
    );;
  }
  delete(post?: any){
    return this.http.delete<any>(this.url+'/'+post.id).pipe(
      catchError(this.handleError)
    );;
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
