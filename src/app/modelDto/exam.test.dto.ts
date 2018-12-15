import { ExamQuestionDto } from "./exam.question.dto";

interface Serializable<T> {
    deserialize(input: Object): T;
}

export class ExamTestDTO implements Serializable<ExamTestDTO> {

    private id: number;
    private name: string;
    private duration: number;
    private examQuestions: Array<ExamQuestionDto>; 

    get Id(): number {
        return this.id;
    }
    get Name(): string {
        return this.name;
    }
    get Duration() {
        return this.duration;
    }
    get ExamQuestions(): Array<ExamQuestionDto> {
        return this.examQuestions;
    }
    set ExamQuestions(questions: Array<ExamQuestionDto>) {
        this.examQuestions = questions;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.duration = json.duration;
        this.examQuestions = json.examQuestions;
        return this;
    }
}