import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Test } from "../model/test.model";
import { Question } from "../model/question.model";
import { Answer } from "../model/answer.model";
//import { ExamAnswerDto } from "../modelDto/exam.answer.dto";
//import { ExamTestDto } from "../modelDto/exam.test.dto";
import { TestDTO } from "../modelDto/test.dto";
import { ExamTestDTO } from "../modelDto/exam.test.dto";
import { ExamDTO } from "../modelDto/exam.dto";


@Injectable()
export class DataService {

    private tests: Array<Test>;

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

    //******************************** */
    createQuestion(testId:number, question: Question) {
        console.log("[Service] --> Create question for test: " + testId);
        console.log("[Service] --> Create question: " + question.Text);
        const body =JSON.stringify(question);
        console.log("[Service] --> Create question body: " + body);
        return this.httpClient.post(this.baseUrl + '/tests' + testId + '/questions', body,{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Accept', '*'),
            observe: 'response'
        })
    }

    /* ANSWER SECTION */
    createAnswers(questionId: number, answers: Array<Answer>) {
        console.log("[Service] --> Create answers for question: " + questionId);
        const body =JSON.stringify(answers);
        console.log("[Service] --> Create aswers body: " + body);
        return this.httpClient.post(this.baseUrl + '/questions/' + questionId +  '/answers', body,{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
                                        .set('Accept', '*'),
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