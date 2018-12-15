import { CompletedExamStatus } from "./completed.exam.status";

interface Serializable<T> {
    deserialize(input: Object): T;
}

export class CompletedExamDTO implements Serializable<CompletedExamDTO> {

    private id: number;
    private totalCorrect: number;
    private totalIncorrect: number;
    private totalUnanswered: number;
    private passingLimit: number;
    private score: number;
    private status: CompletedExamStatus;
    private isCompleted: boolean; 

    get Id(): number {
        return this.id;
    }
    get TotalCorrect(): number {
        return this.totalCorrect;
    }
    get TotalIncorrect(): number {
        return this.totalIncorrect;
    }
    get TotalUnanswered(): number {
        return this.totalUnanswered;
    }
    get PassingLimit(): number {
        return this.passingLimit;
    }
    get Score(): number {
        return this.score;
    }
    get Status(): CompletedExamStatus {
        return this.status;
    }
    get IsCompleted(): boolean {
        return this.isCompleted;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.totalCorrect = json.totalCorrect;
        this.totalIncorrect = json.totalIncorrect;
        this.totalUnanswered = json.totalUnanswered;
        this.passingLimit = json.passingLimit;
        this.score = json.score;
        this.status = json.status;
        this.isCompleted = json.isCompleted;
        return this;
    }
}