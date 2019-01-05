import { QuestionType } from "./question.type";
import { AnswerDTO } from "./answer.dto";

interface Serializable<T> {
    deserialize(input: Object): T;
}
export class QuestionDTO implements Serializable<QuestionDTO> {

    private id: number;
    private text: string;
    private type: QuestionType;
    private answers: Array<AnswerDTO>;

    constructor() {
        this.Type = QuestionType.SINGLE;
    }

    get Id(): number {
        return this.id;
    }
    set Id(id: number) {
        this.id = id;
    }
    get Text(): string {
        return this.text;
    }
    set Text(text:string) {
        this.text = text;
    }
    get Type(): QuestionType {
        return this.type;
    }
    set Type(type:QuestionType) {
        this.type = type;
    }
    get Answers(): Array<AnswerDTO> {
        return this.answers;
    }
    set Answers(answers: Array<AnswerDTO>) {
        this.answers = answers;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.text = json.text;
        this.type = json.type;
        this.answers = new AnswerDTO().deserializeList(json.answers);

        return this;
    }

    deserializeList(json: any) {
        let questions: Array<QuestionDTO> = [];
        if(json != null) {
            for(var i=0; i<json.length; i++) {
                var data = json[i];
                var question: QuestionDTO = new QuestionDTO().deserialize(data);
                questions.push(question);
            }
        }

        return questions;
    }
}