import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export  class MSInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('working');
        req = req.clone({
            headers: new HttpHeaders({
                "Auth": "EISecret",
                "Content-type": "application/json",
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        return next
            .handle(req)
            .pipe(tap(evt =>{
                if(evt instanceof HttpResponse){
                    this.setSession(evt.headers);
                }
                }, (error: HttpErrorResponse) => {
                    this.handleError(error)

            })
                

            )
    }
    /* Error handler function from `catchError()` */
    private handleError(err: HttpErrorResponse){
        this.httpStatusHandler(err)
        const error = err.error.message || err.statusText;
    }

    private httpStatusHandler(response: HttpErrorResponse){

        switch (response.status) {
            case 200:
                console.log("error Type:200 ");
                // this.appService.responseHandler(response);
                break;
            case 302:
                console.log("error Type:02 ");
                /* 302 Redirect to a location */
                // this.router.navigateByUrl(config.webAppURL+response.headers.Location);
                break;
            case 404:
            case 500:
                console.log("error Type: 400 or 500");
                /* 500 Internal API Server Error */
                // this.appService.togglePopup({
                //     type: 'error',
                //     load: true,
                //     context: {
                //         status: response.status,
                //         title: 'Internal Server Error',
                //         description: 'There seems to be some issue with the server. We are fixing it as it while we inform you. Please try again after sometime.'
                //     },
                //     overlayClose: false,
                //   });
                break;
            default:
                // this.appService.errorIdentifier(response);

                console.log("error Type: Default");
                break;
        }

        return response;
    }


    private setSession(authHeaders: HttpHeaders){
        localStorage.setItem("Auth", authHeaders.get('Auth')!);
    }

    
}