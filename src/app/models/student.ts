import { PhoneNumber } from "./phone-number";
import { MailAddress } from "./mail-address";
import { StudyCourse } from './studycourse';

export class Student {
    constructor(
    private mat_nr: Number,
    private username: String,
    private vorName: String,
    private nachName: String,
    private strasse: String,
    private hausNr: String,
    private ort: String,
    private plz: String,
    private telefonNummern: Array<PhoneNumber>,
    private mailAdressen: Array<MailAddress>,
    private gebDatum: Date,
    private gebOrt: String,
    private studienbeginn: Date,
    private studyCourse: StudyCourse,
    private Creditpoints: Number,
    private gebName: String
    ) {
    }

    addPhoneNumber() {
        this.telefonNummern.push(new PhoneNumber(0, ''));
    }

    deletePhoneNumber(phoneNumber: PhoneNumber) {
        const index: number = this.telefonNummern.indexOf(phoneNumber);
        if (index !== -1) {
            this.telefonNummern.splice(index, 1);
        }  
    }

    addMailAddress() {
        this.mailAdressen.push(new MailAddress(''));
    }

    deleteMailAddress(mailAddress: MailAddress) {
        const index: number = this.mailAdressen.indexOf(mailAddress);
        if (index !== -1) {
            this.mailAdressen.splice(index, 1);
        }  
    }

    getStudyCourseName() {
        return StudyCourse[this.studyCourse];
    }
}