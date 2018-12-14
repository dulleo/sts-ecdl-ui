import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Test } from "../model/test.model";
import { Question } from "../model/question.model";
import { ExamDTO } from "../modelDto/exam.dto";
import { TestDTO } from "../modelDto/test.dto";

@Injectable()
export class MessageService {

    private testMessageSource = new BehaviorSubject(new TestDTO);
    selectedTest = this.testMessageSource.asObservable();

    private questionMessageSource = new BehaviorSubject(new Question);
    selectedQuestion = this.questionMessageSource.asObservable();

    private examTestMessageSource = new BehaviorSubject(new ExamDTO);
    examTest = this.examTestMessageSource.asObservable();

    constructor() {}

    selectTest(testDTO: TestDTO) {
        this.testMessageSource.next(testDTO);
    }

    selectQuestion(question: Question) {
        this.questionMessageSource.next(question);
    }

    selectExamTest(examTest: ExamDTO) {
        this.examTestMessageSource.next(examTest);
    }
}