import { Person } from "./Person";

export class Student extends Person {

    private _previousOrganization: string;
    private _skippedDays: number;
    constructor(name: string = " Jane Doe ", age: number = 30, gender: string = " female ", previousOrganization: string = "The School of Life") {


        super(name, age, gender);

        this._previousOrganization = previousOrganization;

        this._skippedDays = 0;

    }

    protected specificGetGoal(): string {

        return " Be a junior software developer.";

    }

    protected specificIntroduction() {
        return " from " + this._previousOrganization + "  who skipped  " + this._skippedDays + " days from the course already ";

    }
    public skipDays(numberOfDays) {

        this._skippedDays = this._skippedDays + numberOfDays;
    }
}

