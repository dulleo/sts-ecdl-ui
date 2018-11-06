import { OnInit, Component } from "@angular/core";

@Component({
    selector: 'app-create-answers',
    templateUrl: '././create-answers.component.html'
})
export class CreateAnswersComponent implements OnInit{

    selectedNumber: number;

    noOfAnswersOption = [
        {"option": 2},
        {"option": 3},
        {"option": 4},
        {"option": 5},
        {"option": 6},

    ];

    constructor() {

    }

    ngOnInit() {

    }
}