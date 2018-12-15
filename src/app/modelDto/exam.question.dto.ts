import { ExamAnswerDto } from "./exam.answer.dto";
import { QuestionType } from "./question.type";
import { ExamQuestionStatus } from "./exam.question.status";

interface Serializable<T> {
    deserialize(input: Object): T;
}

export class ExamQuestionDto implements Serializable<ExamQuestionDto> {
    private id: number;
    private text: string;
    private type: QuestionType;
    private status: ExamQuestionStatus;
    private answers: Array<ExamAnswerDto>;

    get Id(): number {
        return this.id;
    }
    get Text(): string {
        return this.text;
    }
    get Type(): QuestionType {
        return this.type;
    }
    get ExamQuestionStatus(): ExamQuestionStatus {
        return this.status;
    }
    set ExamQuestionStatus(status: ExamQuestionStatus) {
        this.status = status;
    }
    get ExamAnswers(): Array<ExamAnswerDto> {
        return this.answers;
    }
    set ExamAnswers(answers: Array<ExamAnswerDto>) {
        this.answers = answers;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.text = json.text;
        this.type = json.type;
        this.status = json.status;
        this.answers = new ExamAnswerDto().deserializeList(json.answers);
        return this;
    }

    deserializeList(json: any) {
        let questions: Array<ExamQuestionDto> = [];
        if(json != null) {
            for(var i=0; i<json.length; i++) {
                var data = json[i];
                var question: ExamQuestionDto = new ExamQuestionDto().deserialize(data);
                questions.push(question);
            }
        }

        return questions;
    }
}