import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";
import { Test } from "../model/test.model";
import { Router } from "@angular/router";
import { MessageService } from "../service/message.service";
import { Question } from "../model/question.model";

@Component({
    selector: 'app-test-list',
    templateUrl: './test-list.component.html'
})
export class TestListComponent implements OnInit {

    tests: Array<Test>;
    name: string;

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
                this.tests = new Test().deserializeList(resp.body);
            }
        });
    }

    editTest(selectedTest: Test) {
        console.log("edit is called...")
        this.messageService.changeTest(selectedTest);
        this.router.navigate(['tests/edit']);
    }

    deleteTest(selectedTest: Test) {

        if(window.confirm('This action will delete business model \"' + selectedTest.getName()) + '\"". Are you sure?') {
            this.dataService.deleteTest(selectedTest.getId()).subscribe(resp => {
                if(resp.ok) {
                    alert("Test " + selectedTest.getName() + " is successfully deleted!");
                    this.getTests();
                }
            })
        }
    }

    addQuestion(selectedTest: Test) {
        this.messageService.changeTest(selectedTest);
        this.router.navigate(['questions/create']);

    }
}