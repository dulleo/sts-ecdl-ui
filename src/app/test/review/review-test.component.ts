import { OnInit, Component } from "@angular/core";
import { TestDTO } from "src/app/modelDto/test.dto";
import { MessageService } from "src/app/service/message.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-review-test',
    templateUrl: './../review/review-test.component.html'
})
export class ReviewTestComponent implements OnInit {

    testDTO: TestDTO;

    constructor(private messageService: MessageService, private router: Router) {}

    ngOnInit() {
        this.messageService.selectedTest.subscribe(message => this.testDTO = message);
    }

}