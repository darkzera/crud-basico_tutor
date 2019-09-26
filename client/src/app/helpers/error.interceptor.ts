import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from "../services/authentication.service";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }

    // from 2 
    errorHandler(err, req, res, next) {
        if (typeof (err) === 'string') {
            // custom application error
            return res.status(400).json({ message: err });
        }
        if (err.name === 'UnauthorizedError') {
            // jwt authentication error
            return res.status(401).json({ message: 'Invalid Token' });
        }
        // default to 500 server error
        return res.status(500).json({ message: err.message });
    }




}
