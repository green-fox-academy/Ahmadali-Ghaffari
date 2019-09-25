
'use strict'

class PostIt {


    private text: string;
    private textColor: string;
    private backgroundColor: string;

    constructor(text: string, textColor: string, backgroundColor: string) {

        this.text = text;
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;


    }


}


let postIt1 = new PostIt("Idea 1","blue","orange");
let postIt2 = new PostIt("Awesome","black","pink");
let postIt3 = new PostIt("Superb!","green","yellow");

