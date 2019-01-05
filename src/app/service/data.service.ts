import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { QuestionDTO } from "../modelDto/question.dto";
//import { ExamAnswerDto } from "../modelDto/exam.answer.dto";
//import { ExamTestDto } from "../modelDto/exam.test.dto";
import { TestDTO } from "../modelDto/test.dto";
import { ExamTestDTO } from "../modelDto/exam.test.dto";
import { ExamDTO } from "../modelDto/exam.dto";


@Injectable()
export class DataService {

   // private tests: Array<Test>;

    private baseUrl: string = environment.API_URL;

    constructor(private httpClient: HttpClient) {

    }

    getTests() {
        console.log("[Service] --> Get tests");
        return this.httpClient.get(this.baseUrl + '/tests', {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }

    getTest(testId: number) {
        console.log("[Service] --> Get test");
        return this.httpClient.get(this.baseUrl + '/tests/' + testId, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }

    createTest(testDTO: TestDTO) {
        console.log("[Service] --> Create test");
        const body =JSON.stringify(testDTO);
        console.log("[Service] --> body: " + body);
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

    editTest(testDTO: TestDTO) {
        const body =JSON.stringify(testDTO);
        return this.httpClient.put(this.baseUrl + '/tests', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }

    //*** QUESTION ***/

    getQuestion(questionId: number) {
        console.log("[Data Service] --> Get question id: " + questionId);
        let url = this.baseUrl + '/questions/' + questionId;
        return this.httpClient.get(url, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        });
    }


    getQuestions(testId: number) {
        console.log("[Data Service] --> Get questions for test id: " + testId);
        let url = this.baseUrl + '/tests/' + testId + '/questions';
        return this.httpClient.get(url, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        });
    }

    createQuestion(testId:number, question: QuestionDTO) {
        console.log("[Service] --> Create question for test: " + testId);
        console.log("[Service] --> Create question: " + question.Text);
        const body =JSON.stringify(question);
        console.log("[Service] --> Create question body: " + body);
        let url = this.baseUrl + '/tests/' + testId + '/questions';
        console.log("[Service] --> url: " + url);
        return this.httpClient.post(url, body,{
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }

    editQuestion(question: QuestionDTO) {
        console.log("[Service] --> Edit question: " + question.Id);
        const body = JSON.stringify(question);
        console.log("[Service] --> Edit question body: " + body);
        let url = this.baseUrl + '/questions/' + question.Id;
        return this.httpClient.put(url, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })

    }

    deleteQuestion(questionId: number) {
        console.log("[Service] --> Delete question id: " + questionId);
        let url = this.baseUrl + '/questions/' + questionId;
        return this.httpClient.delete(url, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }

    /* EXAM */
    getExamTest(testId: number) {
        console.log("[Service] --> Get exam test id: " + testId);
        return this.httpClient.get(this.baseUrl + '/exams/' + testId, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }

    submitTest(examTest: ExamDTO) {
        //console.log("[Service] --> Submit test id: " + examTest.Id);
        const body =JSON.stringify(examTest);
        return this.httpClient.put(this.baseUrl + '/exams/', body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*'),
            observe: 'response'
        })
    }
}