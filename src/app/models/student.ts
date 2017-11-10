import { PhoneNumber } from "./phone-number";
import { MailAddress } from "./mail-address";

export class Student {
    constructor(
    private mat_nr: Number,
    private vorName: String,
    private nachName: String,
    private strasse: String,
    private hausNr: String,
    private ort: String,
    private plz: String,
    private telefonNummern: Array<PhoneNumber>,
    private mailAdressen: Array<MailAddress>,
    private gebDatum: Date,
    private studienbeginn: Date,
    private studiengangId: Number,
    private Creditpoints: Number
    ) {
    }
}