import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { QuestionDTO } from "../modelDto/question.dto";
import { ExamDTO } from "../modelDto/exam.dto";
import { TestDTO } from "../modelDto/test.dto";

@Injectable()
export class MessageService {

    private testMessageSource = new BehaviorSubject(new TestDTO);
    selectedTest = this.testMessageSource.asObservable();

    private questionMessageSource = new BehaviorSubject(new QuestionDTO);
    selectedQuestion = this.questionMessageSource.asObservable();

    private examTestMessageSource = new BehaviorSubject(new ExamDTO);
    examTest = this.examTestMessageSource.asObservable();

    constructor() {}

    selectTest(testDTO: TestDTO) {
        this.testMessageSource.next(testDTO);
    }

    selectQuestion(questionDTO: QuestionDTO) {
        this.questionMessageSource.next(questionDTO);
    }

    selectExamTest(examTest: ExamDTO) {
        this.examTestMessageSource.next(examTest);
    }
}