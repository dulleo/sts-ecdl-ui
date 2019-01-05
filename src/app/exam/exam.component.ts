import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../service/data.service";
import { MessageService } from "../service/message.service";

import { QuestionType } from "../modelDto/question.type";
import { ExamAnswerDto } from "../modelDto/exam.answer.dto";
import { ExamQuestionDto } from "../modelDto/exam.question.dto";
import { ExamDTO } from "../modelDto/exam.dto";


@Component({
    selector: 'app-exam',
    templateUrl: '././exam.component.html'
})
export class ExamComponent implements OnInit {

    examTest: ExamDTO;
    questionType = QuestionType;
    completed: Boolean = false;
    pass: Boolean = true;
    //status = TestStatus;

    constructor(private router: Router, 
        private dataService: DataService, private messageService : MessageService) {
    }

    ngOnInit() {
        this.messageService.examTest.subscribe(message => this.examTest = message);
    }

    onSelectedChange(question: ExamQuestionDto, answer: ExamAnswerDto) {
       
        question.ExamAnswers.forEach(answer => {
            answer.IsChecked = false;
        });
        answer.IsChecked = true;
        //console.log("Selektovan je " + answer.Text);
        //console.log("Selektovan id je " + answer.Id);
    }

    submitTest() {
        console.log("Submit test....");
    
        this.dataService.submitTest(this.examTest).subscribe(resp => {
            if(resp.ok) {
                this.examTest = new ExamDTO().deserialize(resp.body);
                this.completed = true;
            }
        });
    }
}