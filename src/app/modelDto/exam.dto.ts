import { ExamTestDTO } from "./exam.test.dto";
import { CompletedExamDTO } from "./completed.exam.dto";


interface Serializable<T> {
    deserialize(input: Object): T;
}

export class ExamDTO implements Serializable<ExamDTO> {

    private examTestDTO: ExamTestDTO;
    private completedExamDTO: CompletedExamDTO;
    
    get ExamTestDTO(): ExamTestDTO {
        return this.examTestDTO;
    }
    get CompletedExamDto(): CompletedExamDTO {
        return this.completedExamDTO;
    }
    
    deserialize(json: any) {
        this.examTestDTO = json.examTestDTO;
        this.completedExamDTO = json.completedExamDTO;

        return this;
    }

}