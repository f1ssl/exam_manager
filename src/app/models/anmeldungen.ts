export class anmeldung {
    constructor( 
        private anmeldungId: Number,
        private datum: Date,
        private krankmeldungBeginn: Date,
        private krankmeldungEnde: Date,
        private ruecktritt: Boolean,
        private zensur: Number,
        private anzahl_versuche: Number
    ) {

    }
}