import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {
    api_url: any = environment.api_url;

    constructor(private http: HttpClient,
                private router: Router) {
    }

    private setHeaders(): HttpHeaders {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        return new HttpHeaders(headersConfig);
    }

    private formatErrors(resp: any) {
        return Observable.throw((undefined !== resp.error) ? resp.error : 'Error 500!');
    }

    /**
     * Use GET method globally
     * @param {string} path
     * @param {URLSearchParams} params
     * @returns {Observable<any>}
     */
    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${this.api_url}${path}`, {headers: this.setHeaders(), params: params})
            .catch(this.formatErrors);
    }

    /**
     * Use PUT method globally
     * @param {string} path
     * @param {Object} body
     * @returns {Observable<any>}
     */
    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(
            `${this.api_url}${path}`,
            JSON.stringify(body),
            {headers: this.setHeaders()}
        )
            .catch(this.formatErrors);
    }

    /**
     * Use POST method globally
     * @param {string} path
     * @param {Object} body
     * @returns {Observable<any>}
     */
    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${this.api_url}${path}`,
            JSON.stringify(body),
            {headers: this.setHeaders()}
        )
            .catch(this.formatErrors);
    }

    /**
     * Use DELETE method globally
     * @param path
     * @returns {Observable<any>}
     */
    delete(path): Observable<any> {
        return this.http.delete(
            `${this.api_url}${path}`,
            {headers: this.setHeaders()}
        )
            .catch(this.formatErrors);
    }
}
