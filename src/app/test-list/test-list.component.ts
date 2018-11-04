import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";
import { Test } from "../model/test.model";

@Component({
    selector: 'app-test-list',
    templateUrl: './test-list.component.html'
})
export class TestListComponent implements OnInit {

    tests: Array<Test>;
    name: string;

    constructor(private dataService: DataService) {

    }

    ngOnInit() {
        this.getTest();
    }

    getTest() {
        console.log("Get-tests is called.");
        this.dataService.getTests().subscribe(resp => {
            if(resp.ok) {
                console.log("Get-tests response received....");
                this.tests = new Test().deserializeList(resp.body);
            }
        });
    }
}