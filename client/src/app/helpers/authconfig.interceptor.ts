import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

import { AuthService } from '../services/auth/auth-service.service';
import Cookies from 'universal-cookie';

@Injectable()
export class AuthInceptors implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  cookies = new Cookies();

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();

    if (authToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Token ${authToken}`,
        },
      });
    }

    return next.handle(req);
  }
}
