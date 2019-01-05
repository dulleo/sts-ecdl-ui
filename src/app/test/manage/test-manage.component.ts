import { OnInit, Component } from "@angular/core";
import { TestDTO } from "src/app/modelDto/test.dto";
import { TestStatus } from "src/app/modelDto/test.status";
import { DataService } from "src/app/service/data.service";
import { Router } from "@angular/router";
import { MessageService } from "src/app/service/message.service";

@Component({
    selector: 'app-test-manage',
    templateUrl: './test-manage.component.html',
    styleUrls: ['./test-manage.component.css']
})
export class TestManageComponent implements OnInit {

    testDTO: TestDTO;
    testStatus = TestStatus;
    durations = [0,5,10,15,20,25,30,35,40,45,50,55,60,70,80,90,100,110,120];
    passingLimits = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
    minQuestionsToActivateTest: number = 4; //ovo ucitaj preko env
    isEditMode: Boolean;
    submitText: string;

    constructor(private dataService: DataService, private router: Router, private messageService: MessageService) {
    }

    ngOnInit() {
        this.messageService.selectedTest.subscribe(message => this.testDTO = message);
        if(this.testDTO.Id) {
            this.submitText = "Izmeni test";
            this.isEditMode = true;
        } else {
            this.submitText = "Novi Test";
            this.initializeTestDTO();
            this.isEditMode = false;
        }
    }

    initializeTestDTO() {
        this.testDTO.Duration = 0;
        this.testDTO.Status = TestStatus.INACTIVE;
        this.testDTO.PassingLimit = 0;
        this.testDTO.TotalExamQuestions = 0;
        this.testDTO.TotalQuestions = 0;
    }

    changeTestStatus() {
        console.log("Test status: " + this.testDTO.Status);
        if(this.testDTO.Status == TestStatus.ACTIVE) {
            this.testDTO.Status = TestStatus.INACTIVE;
            
        } else if(this.testDTO.Status == TestStatus.INACTIVE) {
            this.testDTO.Status = TestStatus.ACTIVE;
           
        }
        console.log("Test status: " + this.testDTO.Status);
    }

    onSubmit() {

        if(this.isEditMode) {
            console.log("Edit test id: " + this.testDTO.Id);
            this.dataService.editTest(this.testDTO).subscribe(resp => {
                if(resp.ok) {
                    this.router.navigate(['tests']);
                }
            });
        } else {
            console.log("Create test");
            this.dataService.createTest(this.testDTO).subscribe(resp => {
                if(resp.ok) {
                    this.router.navigate(['tests']);
                }
            })
        }
    }
}