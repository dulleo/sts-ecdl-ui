import { QuestionType } from "./question.type";

interface Serializable<T> {
    deserialize(input: Object): T;
}
export class Question implements Serializable<Question> {

    private id: number;
    private text: string;
    private testId: number;
    private type: QuestionType;

    constructor() {
        this.setQuestionType(QuestionType.Single);
    }

    getId(): number {
        return this.id;
    }
    setId(id: number): void {
        this.id = id;
    }
    getText(): string {
        return this.text;
    }
    setText(text:string): void {
        this.text = text;
    }
    getTestId(): number {
        return this.testId;
    }
    setTestId(testId: number): void {
        this.testId = testId;
    }
    getQuestionType(): QuestionType {
        return this.type;
    }
    setQuestionType(type:QuestionType) {
        this.type = type;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.text = json.text;
        this.testId = json.testId;
        this.type = json.type

        return this;
    }

    deserializeList(json: any) {
        let questions: Array<Question> = [];
        if(json != null) {
            for(var i=0; i<json.length; i++) {
                var data = json[i];
                var question: Question = new Question().deserialize(data);
                questions.push(question);
            }
        }

        return questions;
    }
}