class bootstrapAlert {
    text: string;
    textYes: string;
    textNo: string;
    message: number;
    constructor(text: string){
        (typeof text == 'undefined') ? this.text = "" : this.text = text;
    }
}