interface Serializable<T> {
    deserialize(input: Object): T;
}
export class AnswerDTO implements Serializable<AnswerDTO> {

    private id: number;
    private text: string;
    private isCorrect: Boolean;

    constructor() {
        this.isCorrect = false;
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
    get IsCorrect(): Boolean {
        return this.isCorrect;
    }
    set IsCorrect(isCorrect:Boolean) {
        this.isCorrect = isCorrect;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.text = json.text;
        this.isCorrect = json.isCorrect;

        return this;
    }

    deserializeList(json: any) {
        let answers: Array<AnswerDTO> = [];
        if(json != null) {
            for(var i=0; i<json.length; i++) {
                var data = json[i];
                var answer: AnswerDTO = new AnswerDTO().deserialize(data);
                answers.push(answer);
            }
        }

        return answers;
    }
}