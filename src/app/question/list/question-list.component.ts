import { OnInit, Component } from "@angular/core";
import { TestDTO } from "src/app/modelDto/test.dto";
import { QuestionDTO } from "src/app/modelDto/question.dto";
import { Router } from "@angular/router";
import { MessageService } from "src/app/service/message.service";
import { DataService } from "src/app/service/data.service";

@Component({
    selector:'app-question-list',
    templateUrl: './question-list.component.html',
    styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

    selectedTest: TestDTO;
    questions: Array<QuestionDTO>;
    display='none';
    selectedQuestion: QuestionDTO;
    questionExists: Boolean = false;

    constructor(private router: Router, private messageService: MessageService, private dataService: DataService) {}

    ngOnInit() {
        this.messageService.selectedTest.subscribe(message => this.selectedTest = message);
        this.getQuestions();
    }

    getQuestions() {
        this.dataService.getQuestions(this.selectedTest.Id).subscribe(resp => {
            if(resp.ok) {
                console.log("Get-questions response received....");
                this.questions = new QuestionDTO().deserializeList(resp.body);
                console.log("No of questions: " + this.questions.length);
                if(this.questions.length > 0) {
                    this.questionExists = true;
                }
            }
        });
    }

    createQuestion() {
        console.log("Create question"); 
        this.messageService.selectTest(this.selectedTest);
        //this.messageService.selectQuestion(new QuestionDTO());
        this.router.navigate(['questions/manage']);
    }

    editQuestion(selectedQuestion: QuestionDTO) {
        console.log("Edit question id: " + selectedQuestion.Id);
        this.messageService.selectTest(this.selectedTest);
        this.messageService.selectQuestion(selectedQuestion);
        this.router.navigate(['questions/manage']);
    }

    reviewQuestion(selectedQuestion: QuestionDTO) {
        console.log("Review question id: " + selectedQuestion.Id)
    }

    openModal(selectedQuestion: QuestionDTO){
        this.display='block';
        this.selectedQuestion = selectedQuestion; 
    }

    onCloseHandled(){
        this.display='none';
        this.selectedQuestion = null; 
    }

    onDeleteHandled() {
        this.dataService.deleteQuestion(this.selectedQuestion.Id).subscribe(resp => {
            if(resp.ok) {
                //alert("Test " + this.selectedTestDTO.Name + " is successfully deleted!");
                this.getQuestions();
                this.onCloseHandled();
            }
        });

    }

}