import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Test } from "../model/test.model";


@Injectable()
export class DataService {

    private tests: Array<Test>;

    private baseUrl: string = environment.API_URL;

    constructor(private httpClient: HttpClient) {

    }

    getTests() {
        return this.httpClient.get(this.baseUrl + '/tests', {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }

    createTest(test: Test) {
        const body =JSON.stringify(test);
        return this.httpClient.post(this.baseUrl + '/tests', body,{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Accept', '*'),
            observe: 'response'
        })
    }

}