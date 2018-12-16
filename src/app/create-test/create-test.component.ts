import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { DataService } from "../service/data.service";
import { Router } from "@angular/router";
import { TestDTO } from "../modelDto/test.dto";
import { TestStatus } from "../modelDto/test.status";


@Component({
    selector: 'app-create-test',
    templateUrl: './create-test.component.html',
    styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {
    
    @ViewChild('testName') testNameRef: ElementRef;
    @ViewChild('testForm') form: any;

    isValid: Boolean;
    testDTO: TestDTO;
    testStatus = TestStatus;
    durations = [0,5,10,15,20,25,30,35,40,45,50,55,60,70,80,90,100,110,120];
    passingLimits = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
    minQuestionsToActivateTest: number = 4;

    constructor(private dataService: DataService, private router: Router) {
        this.initializeTestDTO();
    }

    ngOnInit() {
        this.testNameRef.nativeElement.focus();
        this.isValid = true;
        
    }

    createTest() {

        if(!this.form.valid) {
            this.isValid = false;
            this.testNameRef.nativeElement.focus();
        } else {
            console.log("creiraj " + this.testDTO.Name);
            console.log("create-tests is called.");
            
            console.log(this.testDTO.Duration);
            console.log(this.testDTO.Status);
            console.log(this.testDTO.PassingLimit);
            console.log(this.testDTO.TotalExamQuestions);
        
            this.dataService.createTest(this.testDTO).subscribe(resp => {
                if(resp.ok) {
                    this.router.navigate(['tests']);
                }
            });
        }
    }

    initializeTestDTO() {
        this.testDTO = new TestDTO();
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
}