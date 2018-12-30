import { OnInit, Component } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "src/app/service/message.service";
import { DataService } from "src/app/service/data.service";
import { QuestionDTO } from "src/app/modelDto/question.dto";
import { TestDTO } from "src/app/modelDto/test.dto";
import { QuestionType } from "src/app/modelDto/question.type";
import { AnswerDTO } from "src/app/modelDto/answer.dto";

@Component({
    selector: 'app-question-manage',
    templateUrl: './question-manage.component.html',
    styleUrls: ['./question-manage.component.css']
})
export class QuestionManageComponent implements OnInit {

    modeCreate: Boolean;
    selectedQuestion: QuestionDTO;
    selectedTest: TestDTO;
    totalAnswers: number = 0;
    checkboxCounter: number = 0;
    questionType = QuestionType;
    //answers: Array<AnswerDTO>;
    noOfAnswersOptionIsSelected: Boolean = false;
    noOfAnswersOption = [2,3,4,5,6,7,8,9,10];
    checkboxAreValid: Boolean = false;
    submitText: string;
    selectedValue: AnswerDTO = new AnswerDTO();

    constructor(private router: Router, private messageService: MessageService, private dataService: DataService) {}

    ngOnInit() {
        console.log("manage question component")
        this.messageService.selectedTest.subscribe(message => this.selectedTest = message);
        console.log("Selected test: " + this.selectedTest.Name);
        this.messageService.selectedQuestion.subscribe(message => this.selectedQuestion = message);
        if(this.selectedQuestion.Id) {
            console.log("Mode edit");
            this.submitText = "Izmeni pitanje i odgovore";
            this.getQuestionFromDatabase();
            this.noOfAnswersOptionIsSelected = true;
            this.modeCreate = false;
           
            
        } else {
            this.submitText = "Kreiraj pitanje i odgovore";
            this.modeCreate = true;
            console.log("Mode create: " + this.modeCreate);
           
            
        }
    }

    getQuestionFromDatabase() {
        this.dataService.getQuestion(this.selectedQuestion.Id).subscribe(resp => {
            if(resp.ok) {
                console.log("Get-question response received....");
                this.selectedQuestion = new QuestionDTO().deserialize(resp.body);
                console.log("Total" + this.selectedQuestion.Answers.length);
                this.totalAnswers = this.selectedQuestion.Answers.length;
               
                this.selectedQuestion.Answers.forEach(answer => {
                    console.log("IsCorrect: " + answer.IsCorrect);
                });
                if(this.selectedQuestion.Type === this.questionType.MULTIPLE) {
                    this.validateCheckboxCount();
                }
                
            }
        });
    }

    onSubmit() {
        //this.selectedQuestion.Answers = this.answers;
        console.log("Create question for test id: " + this.selectedTest.Id);
            this.dataService.createQuestion(this.selectedTest.Id, this.selectedQuestion).subscribe(resp => {
                if(resp.ok) {
                    this.router.navigate(['questions']);
                }
            });
    }

    /**
     * When we select number of answers, an answer array is created
     * and selected switch is set to true (we use this in the html for if statement)
     */
    noOfAnswersChanged() {
        //this.answers = [];
        this.selectedQuestion.Answers = [];
        let counter = this.totalAnswers;            //need to keep original totalAnswers
        while(counter>=1) {
            let a = new AnswerDTO();
            //this.answers.push(a);
            this.selectedQuestion.Answers.push(a);
            counter--;
        }
        this.noOfAnswersOptionIsSelected = true;
        this.checkboxAreValid = false;
    }

    /**
     *  When checkbox is checked we need to calculate total checked checkboxes
     *  because for multiple answers there must be min 2 checkboxes cheked
     */
    validateCheckboxCount() {
       
        this.checkboxCounter = 0;
        this.selectedQuestion.Answers.forEach(answer => {
            if(answer.IsCorrect == true) 
            this.checkboxCounter++;
        });

        if(this.checkboxCounter > 1) {
            this.checkboxAreValid = true;
        } else {
            this.checkboxAreValid = false;
        }
    }

    multipleChiceQuestionRadioIsSelected() {
        
        if(this.selectedQuestion.Answers) {
            this.selectedQuestion.Answers.forEach(answer => {
                answer.IsCorrect = false;
            })
            this.checkboxAreValid = false;
        }
    }

    /**
     * When radio button is changed we need to set all values to false
     * and then set to true for selected answer
     * @param a 
     */
    answerRadioSelected(a: AnswerDTO) {
        this.selectedQuestion.Answers.forEach(answer => {
            answer.IsCorrect = false;
        });
        a.IsCorrect = true;
    }
}