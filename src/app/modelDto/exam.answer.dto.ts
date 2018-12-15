interface Serializable<T> {
    deserialize(input: Object): T;
}

export class ExamAnswerDto implements Serializable<ExamAnswerDto> {
    private id: number;
    private text: string;
    private isCorrect: Boolean;
    private isChecked: Boolean;

    get Id(): number {
        return this.id;
    }
    get Text(): string {
        return this.text;
    }
    get IsCorrect():Boolean {
        return this.isCorrect;
    }
    get IsChecked(): Boolean {
        return this.isChecked;
    }
    set IsChecked(checked: Boolean) {
        this.isChecked = checked;
    }
    
    deserialize(json: any) {
        this.id = json.id;
        this.text = json.text;
        this.isCorrect = json.isCorrect;
        this.isChecked = json.isChecked;

        return this;
    }

    deserializeList(json: any) {
        let answers: Array<ExamAnswerDto> = [];
        if(json != null) {
            for(var i=0; i<json.length; i++) {
                var data = json[i];
                var answer: ExamAnswerDto = new ExamAnswerDto().deserialize(data);
                answers.push(answer);
            }
        }

        return answers;
    }
}