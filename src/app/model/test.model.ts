interface Serializable<T> {
    deserialize(input: Object): T;
}
export class Test implements Serializable<Test> {

    private id: number;
    private name: string;

    getId(): number {
        return this.id;
    }
    setId(id: number): void {
        this.id = id;
    }
    getName(): string {
        return this.name;
    }
    setName(name:string): void {
        this.name = name;
    }

    deserialize(json: any) {
        this.id = json.id;
        this.name = json.name;

        return this;
    }

    deserializeList(json: any) {
        let models: Array<Test> = [];
        if(json != null) {
            for(var i=0; i<json.length; i++) {
                var data = json[i];
                var test: Test = new Test().deserialize(data);
                models.push(test);
            }
        }
    }
}