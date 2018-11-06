import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Test } from "../model/test.model";
import { Question } from "../model/question.model";


@Injectable()
export class DataService {

    private tests: Array<Test>;

    private baseUrl: string = environment.API_URL;

    constructor(private httpClient: HttpClient) {

    }

    getTests() {
        console.log("[Service] --> Get tests")
        return this.httpClient.get(this.baseUrl + '/tests', {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }

    createTest(test: Test) {
        console.log("[Service] --> Create test")
        const body =JSON.stringify(test);
        return this.httpClient.post(this.baseUrl + '/tests', body,{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Accept', '*'),
            observe: 'response'
        })
    }

    deleteTest(id:number) {
        console.log("[Service] --> Delete test id: " + id)
        let deleteUrl: string;
        deleteUrl = this.baseUrl + '/tests/' + id;
        return this.httpClient.delete(deleteUrl, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }

    editTest(test: Test) {
        const body =JSON.stringify(test);
        return this.httpClient.put(this.baseUrl + '/tests', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }

    //******************************** */
    createQuestion(question: Question) {
        console.log("[Service] --> Create question for test: " + question.getTestId());
        console.log("[Service] --> Create question: " + question.getText());
        const body =JSON.stringify(question);
        console.log("[Service] --> Create question body: " + body);
        return this.httpClient.post(this.baseUrl + '/questions', body,{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Accept', '*'),
            observe: 'response'
        })
    }
}