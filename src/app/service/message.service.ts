import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Test } from "../model/test.model";
import { Question } from "../model/question.model";

@Injectable()
export class MessageService {

    private testMessageSource = new BehaviorSubject(new Test);
    selectedTest = this.testMessageSource.asObservable();

    private questionMessageSource = new BehaviorSubject(new Question);
    selectedQuestion = this.questionMessageSource.asObservable();

    constructor() {}

    changeTest(test: Test) {
        this.testMessageSource.next(test);
    }

    changeQuestion(question: Question) {
        this.questionMessageSource.next(question);
    }

}