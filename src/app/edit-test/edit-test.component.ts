import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";
import { MessageService } from "../service/message.service";
import { Test } from "../model/test.model";
import { Router } from "@angular/router";


@Component({
    selector: 'app-edit-test',
    templateUrl: './edit-test.component.html'
})
export class EditTestComponent implements OnInit {

    test: Test;

    constructor(private dataService: DataService,
        private messageService: MessageService,
        private router: Router) {}

    ngOnInit() {
        this.messageService.selectedTest.subscribe(message => this.test = message);
    }

    editTest() {
        this.dataService.editTest(this.test).subscribe(resp => {
            if(resp.ok) {
                console.log("Create-test return ok....");
                this.router.navigate(['tests']);
            }
        });
    }
}