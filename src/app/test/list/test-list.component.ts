import { Component, OnInit } from "@angular/core";
import { DataService } from "../../service/data.service";
import { Router } from "@angular/router";
import { MessageService } from "../../service/message.service";
//import { ExamTestDto } from "../modelDto/exam.test.dto";
import { ExamQuestionDto } from "../../modelDto/exam.question.dto";
import { ExamTestDTO } from "../../modelDto/exam.test.dto";
import { ExamDTO } from "../../modelDto/exam.dto";
import { TestDTO } from "../../modelDto/test.dto";

@Component({
    selector: 'app-test-list',
    templateUrl: './test-list.component.html',
    styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

    tests: Array<TestDTO>;
    name: string;
    //examTest: ExamDTO;
    testDTO: TestDTO;
    display='none';
    selectedTestDTO: TestDTO;
    testExists: Boolean = false;

    constructor(private router: Router, 
        private dataService: DataService, private messageService : MessageService) {
    }

    ngOnInit() {
        this.getTests();
    }

    getTests() {
        this.dataService.getTests().subscribe(resp => {
            if(resp.ok) {
                console.log("Get-tests response received....");
                this.tests = new TestDTO().deserializeList(resp.body);
                if(this.tests.length > 0) {
                    this.testExists = true;
                }
            }
        });
    }

    editTest(selectedTestDTO: TestDTO) {
        console.log("edit is called...")
        this.messageService.selectTest(selectedTestDTO);
        this.router.navigate(['tests/manage']);
    }

    getQuestions(selectedTestDTO: TestDTO) {
        this.messageService.selectTest(selectedTestDTO);
        this.router.navigate(['questions']);

    }

    /*
    runTest(test: Test) {
        console.log("run test id: " + test.Id);
        this.dataService.getExamTest(test.Id).subscribe(resp => {
            if(resp.ok) {
                //this.examTest = new ExamDTO().deserialize(resp.body);
                
                //console.log("Prvo pitanje text: " + this.examTest.ExamTestDTO.ExamQuestions[0].Text);
               //console.log("Prvi odgovor: " + this.examTest.ExamTestDTO.ExamQuestions[0].ExamAnswers[0].Text);
                //this.messageService.selectExamTest(this.examTest);
                //this.router.navigate(['exams']);
            }
        });
    }*/

    createTest() {
        this.router.navigate(['tests/manage']);
    }

    reviewTest(testDTO: TestDTO) {
        console.log("Test: " + testDTO.Name);
        this.dataService.getTest(testDTO.Id).subscribe(resp => {
            if(resp.ok) {
                this.testDTO = new TestDTO().deserialize(resp.body);
                this.messageService.selectTest(this.testDTO);
                this.router.navigate(['tests/review']);
            }
        });
    }

    openModal(testDTO: TestDTO){
        this.display='block';
        this.selectedTestDTO = testDTO; 
    }

    onCloseHandled(){
        this.display='none';
        this.selectedTestDTO = null; 
    }

    onDeleteHandled() {
        this.dataService.deleteTest(this.selectedTestDTO.Id).subscribe(resp => {
            if(resp.ok) {
                //alert("Test " + this.selectedTestDTO.Name + " is successfully deleted!");
                this.getTests();
                this.onCloseHandled();
            }
        });

    }
}