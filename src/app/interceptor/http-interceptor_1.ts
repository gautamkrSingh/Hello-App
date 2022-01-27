import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { finalize, tap, catchError } from "rxjs/operators";
import { Router } from '@angular/router';

import { AppService } from '../services/app-service/app.service';
import { LoaderService } from '../services/loader-service/loader.service';
import { config } from 'src/environments/environment';

@Injectable()
export class MSInterceptor implements HttpInterceptor {
    constructor(
        private appService: AppService,
        private loader: LoaderService,
        private router: Router,
    ) { }

    /* Error handler function from `catchError()` */
    private handleError(err: HttpErrorResponse){
        this.httpStatusHandler(err)
        const error = err.error.message || err.statusText;
    }

    private httpStatusHandler(response){

        switch (response.status) {
            case 200:
                this.appService.responseHandler(response);
                break;
            case 302:
                /* 302 Redirect to a location */
                this.router.navigateByUrl(config.webAppURL+response.headers.Location);
                break;
            case 404:
            case 500:
                /* 500 Internal API Server Error */
                this.appService.togglePopup({
                    type: 'error',
                    load: true,
                    context: {
                        status: response.status,
                        title: 'Internal Server Error',
                        description: 'There seems to be some issue with the server. We are fixing it as it while we inform you. Please try again after sometime.'
                    },
                    overlayClose: false,
                  });
                break;
            default:
                this.appService.errorIdentifier(response);
                break;
        }

        return response;
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /* Checking the Application is online or not */
        if(navigator.onLine){
            /* Enabling the loader */
            this.loader.show();
            /* Setting the jwt token to the header if the local storage has the jwt token */
            /* For the Config API doesn't need any header, so we checking weather the req has the Config API endpoint or not*/
            if (localStorage.getItem("jwt") && !req.url.includes(config.configApiURI)) {
                req = req.clone({
                    headers: new HttpHeaders({
                        "jwt": localStorage.getItem("jwt"),
                        "Content-Type": "application/json"
                    })
                });
            }
            return next
                .handle(req)
                .pipe(tap(evt => {
                    if (evt instanceof HttpResponse) {
                        this.setSession(evt.headers);
                        this.httpStatusHandler(evt);
                    }
                }, (error: HttpErrorResponse) => {
                    this.handleError(error)
                })).pipe(finalize(() => {
                    setTimeout(() => {
                        this.loader.hide();
                    }, 100);
                }));
        }
    }

    /* Setting the user session */
    private setSession(authHeaders: HttpHeaders) {
        /* If API response header has JWT  */
        if(authHeaders.get("JWT") !== null){
            /* Comparing if localStorage jwt and API response header JWT is not same  */
            if (localStorage.getItem("jwt") !== authHeaders.get("JWT")) {
                /* Set localStorage jwt as API response header JWT  */
                localStorage.setItem("jwt", authHeaders.get("JWT"));
            }
            /* This function will listen if the screen is idle or not if it'll idle for some time then logged out the user */
            this.appService.sessionKeepAliveHandler();
        }
    }
}
