import { Component, OnInit } from "@angular/core";
import { Test } from "../model/test.model";
import { DataService } from "../service/data.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-create-test',
    templateUrl: './create-test.component.html'
})
export class CreateTestComponent implements OnInit {

    test: Test = new Test();

    constructor(private dataService: DataService, private router: Router) {
    }

    ngOnInit() {
    }

    createTest() {
        console.log("creiraj " + this.test.getName());
        console.log("create-tests is called.");
        this.dataService.createTest(this.test).subscribe(resp => {
            if(resp.ok) {
                console.log("Create-test return ok....");
                this.router.navigate(['tests']);
            }
        });
    }
}