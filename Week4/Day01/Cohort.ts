import { Student } from "./Student";
import { Mentor } from "./Mentor";

export class Cohort {

    protected _name: string;
    protected _students: Student[];
    protected _mentors: Mentor[];

    constructor(name: string) {

        this._name = name;
        this._students = [] ;
        this._mentors = [] ;

    }

    public addStudent(Student) {

        this._students.push(Student);

    }

    public addMentor(Mentor) {

        this._mentors.push(Mentor);

    }

    public info() {

        console.log(" The " + this._name + " cohort has " + this._students.push() + " students and " + this._mentors.push() + " mentors. ");

    }






}