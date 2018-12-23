import { Component, OnInit } from "@angular/core";
import { QuestionDTO } from "../modelDto/question.dto";
import { MessageService } from "../service/message.service";
import { DataService } from "../service/data.service";
import { Router } from "@angular/router";
import { TestDTO } from "../modelDto/test.dto";
import { QuestionType } from "../modelDto/question.type";
import { AnswerDTO } from "../modelDto/answer.dto";

@Component({
    selector: 'app-create-question',
    templateUrl: './create-question.component.html',
    styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

    question: QuestionDTO = new QuestionDTO();
    test: TestDTO;
    totalAnswers: number = 0;
    checkboxCounter: number = 0;
    questionType = QuestionType;
    answers: Array<AnswerDTO>;
    selected: Boolean = false;
    noOfAnswersOption = [2,3,4,5,6,7,8,9,10];
    checkboxAreValid: Boolean = false;

    constructor(private router: Router, private messageService: MessageService, private dataService: DataService) {}

    ngOnInit() {
        this.messageService.selectedTest.subscribe(message => this.test = message);
        console.log("selected: " + this.selected);
    }

    onSubmit() {
        this.question.Answers = this.answers;
            this.dataService.createQuestion(this.test.Id, this.question).subscribe(resp => {
                if(resp.ok) {
                    this.router.navigate(['tests']);
                }
            });
    }

    /**
     * When we select number of answers, an answer array is created
     * and selected switch is set to true (we use this in the html for if statement)
     */
    answersInitialization() {
        this.answers = [];
        let counter = this.totalAnswers;            //need to keep original totalAnswers
        while(counter>=1) {
            let a = new AnswerDTO();
            this.answers.push(a);
            counter--;
        }
        this.selected = true;
    }

    /**
     * When radio button is changed we need to set all values to false
     * and then set to true for selected answer
     * @param a 
     */
    radioChanged(a: AnswerDTO) {

        this.answers.forEach(answer => {
            answer.IsCorrect = false;
        });

        a.IsCorrect = true;
    }

    /**
     *  When checkbox is checked we need to calculate total checked checkboxes
     *  because for multiple answers there must be min 2 checkboxes cheked
     */
    checkboxChanged() {
        
        this.checkboxCounter = 0;
        this.answers.forEach(answer => {
            if(answer.IsCorrect == true) 
            this.checkboxCounter++;
        })

        if(this.checkboxCounter > 1) {
            this.checkboxAreValid = true;
        } else {
            this.checkboxAreValid = false;
        }
    }
}