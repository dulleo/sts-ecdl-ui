import { Component, OnInit } from "@angular/core";
import { Question } from "../model/question.model";
import { MessageService } from "../service/message.service";
import { Test } from "../model/test.model";
import { DataService } from "../service/data.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-create-question',
    templateUrl: './create-question.component.html'
})
export class CreateQuestionComponent implements OnInit {

    question: Question = new Question();
    
    test: Test;

    constructor(private router: Router, private messageService: MessageService, private dataService: DataService) {}

    ngOnInit() {
        this.messageService.selectedTest.subscribe(message => this.test = message);
    }

    createQuestion() {
        this.question.setTestId(this.test.getId());

        console.log("testId: " + this.question.getTestId());
        console.log("text: " + this.question.getText());
        console.log("type:" + this.question.getQuestionType());
        
        this.dataService.createQuestion(this.question).subscribe(resp => {
            if(resp.ok) {
                //this.router.navigate(['tests']);
                this.router.navigate(['answers/create']);
            }
        });

    }

}