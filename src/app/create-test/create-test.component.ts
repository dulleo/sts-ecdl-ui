import { Component, OnInit } from "@angular/core";
import { Test } from "../model/test.model";
import { DataService } from "../service/data.service";

@Component({
    selector: 'app-create-test',
    templateUrl: './create-test.component.html'
})
export class CreateTestComponent implements OnInit {

    test: Test = new Test();

    constructor(private dataService: DataService) {
    }

    ngOnInit() {

    }

    createTest() {
        console.log("creiraj " + this.test.getName());
        console.log("create-tests is called.");
        this.dataService.createTest(this.test).subscribe(resp => {
            if(resp.ok) {
                console.log("Create-test return ok....");
                //this.tests = new Test().deserializeList(resp.body);
                //this.name = this.tests[0].getName();
                //rutiraj
            }
        });
    }

}