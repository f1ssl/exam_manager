export class Exam {

    constructor(private id: Number,
        private name: String) {
    }
}

export class PossibleExam extends Exam {
    constructor(id: Number, name: String, private check: Boolean) { super(id, name); }
}