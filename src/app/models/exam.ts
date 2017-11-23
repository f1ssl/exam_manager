export class Exam {

    constructor(private id: Number,
        private name: String) {
    }
}

export class PossibleExam extends Exam {
    constructor(id: Number, name: String, private check: Boolean) { super(id, name); }
}

export class DoneExam extends Exam {
    private semester: String;
    private grade: Number;
    private state: String;
    private creditpoints: Number;
    private tries: Number;
    private date: Date;

    constructor(id: Number, name: String,
        semester: String,
        grade: Number,
        state: String,
        creditpoints: Number,
        tries: Number,
        date: Date) {
        super(id, name);
        this.semester = semester;
        this.grade = grade;
        this.state = state;
        this.creditpoints = creditpoints;
        this.tries = tries;
        this.date = date;
    }
}