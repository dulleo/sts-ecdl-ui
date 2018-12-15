import { TestStatus } from "./test.status";

interface Serializable<T> {
    deserialize(input: Object): T;
}
export class TestDTO implements Serializable<TestDTO> {

    private id: number;
    private name: string;
    private duration: number;
    private passingLimit: number;
    private status: TestStatus;
    private totalExamQuestions: number;
    private totalQuestions: number;

    public get Id(): number {
        return this.id;
    }
    public get Name(): string {
        return this.name;
    }
    public set Name(name:string) {
        this.name = name;
    }
    public get Duration(): number {
        return this.duration;
    }
    public set Duration(duration: number) {
        this.duration = duration;
    }
    public get PassingLimit(): number {
        return this.passingLimit;
    }
    public set PassingLimit(limit: number) {
        this.passingLimit = limit;
    }
    public get Status(): TestStatus {
        return this.status;
    }
    public set Status(status: TestStatus) {
        this.status = status;
    }
    public get TotalExamQuestions(): number {
        return this.totalExamQuestions;
    }
    public set TotalExamQuestions(total:number) {
        this.totalExamQuestions = total;
    }
    public get TotalQuestions(): number {
        return this.totalQuestions;
    }
    public set TotalQuestions(totalQuestions: number) {
        this.totalQuestions = totalQuestions;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.name = json.name;
        this.duration = json.duration;
        this.passingLimit = json.passingLimit;
        this.status = json.status;
        this.totalExamQuestions = json.totalExamQuestions;
        this.totalQuestions = json.totalQuestions;

        return this;
    }

    deserializeList(json: any) {
        let tests: Array<TestDTO> = [];
        if(json != null) {
            for(var i=0; i<json.length; i++) {
                var data = json[i];
                var test: TestDTO = new TestDTO().deserialize(data);
                tests.push(test);
            }
        }

        return tests;
    }
}