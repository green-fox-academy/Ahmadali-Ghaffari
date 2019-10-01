import { Person } from "./Person"

export class Sponsor extends Person {

    private _company: string;
    private _hiredStudents: number;



    constructor(name: string = "Jane Doe", age: number = 30, gender: string = "female", company: string = "Google") {

        super(name, age, gender);

        this._hiredStudents = 0;
        this._company = company;


    }


    protected specificIntroduction() {

        return " who represents " + this._company + " and hired " + this._hiredStudents + " students so far ";

    }

    public hire() {

        this._hiredStudents += 1;

    }

    protected specificGetGoal(): string {

        return " Hire brilliant junior software developers. ";

    }

}