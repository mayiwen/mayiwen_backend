import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Response as ExpressResponse } from 'express';
@Injectable()
export class ResponseAddAccessTokenToHeaderInterceptor implements NestInterceptor {
    intercept(context:ExecutionContext, next:CallHandler): Observable<any> {
        const ResponseObj:ExpressResponse = context.switchToHttp().getResponse();
        ResponseObj.setHeader('Content-Security-Policy', `frame-ancestors 'none'` );
        ResponseObj.setHeader('Referrer-Policy', 'no-referrer-when-downgrade' );
        ResponseObj.setHeader('X-Content-Type-Options', 'nosniff' );
        ResponseObj.setHeader('X-Download-Options', 'noopen' );
        ResponseObj.setHeader('X-Frame-Options', 'SAMEORIGIN' );
        ResponseObj.setHeader('X-Permitted-Cross-Domain-Policies', 'value' );
        ResponseObj.setHeader('X-XSS-Protection', '1;mode=block' );
        return next.handle();
    }
}