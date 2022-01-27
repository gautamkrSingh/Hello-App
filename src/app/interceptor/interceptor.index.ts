import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MSInterceptor } from './http-interceptor';

/* Exporting the Interceptor and Error Handler as Object to use in App Module */
export const msHttpInterceptorsAndHandler = [
    /* Root Interceptor */
    { provide: HTTP_INTERCEPTORS, useClass: MSInterceptor, multi: true }
];
