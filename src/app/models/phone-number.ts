import { PhoneNumberKind } from './phone-number-kind';

export class PhoneNumber {
    constructor(
        private kind: PhoneNumberKind,
        private phoneNumber: String
    ) {

    }
}