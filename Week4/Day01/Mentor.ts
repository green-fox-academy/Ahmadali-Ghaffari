import { Person } from "./Person"

export class Mentor extends Person {


    protected _level: string;

    constructor(name: string = " Jane Doe ", age: number = 30, gender: string = " female ", level: string = " Intermediate ") {

        super(name, age, gender);
        this._level = level;


    }


    protected specificGetGoal(): string {

        return " Educate brilliant junior software developers. ";

    }

    protected specificIntroduction() {

        return this._level + " mentor ";




    }


}