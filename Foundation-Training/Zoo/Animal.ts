'use strict';

export abstract class Animal {
    protected _name: string;
    protected _age: number;
    protected _gender: string;
    protected _fedTimes: number = 0;
    protected _checkOn: number = 1;

    constructor(name: string, age: number = 1, gender: string = "unknown") {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    public eat(): void {
        this._fedTimes += 1;
    }

    public abstract isHungry(): boolean;

    public toString(): string {
        return `${this._name} is a ${this._age} years old ${this._gender} animal and was fed ${this._fedTimes} times`;
    }
}

export class Lion extends Animal {
    isHungry(): boolean {
        return true;
    }
}

export class Monkey extends Animal {
    isHungry(): boolean {
        if (Math.random() > 0.5) {
            return true;
        } else {
            return false;
        }
    }
}

export class Elephant extends Animal {
    isHungry(): boolean {
        if (this._checkOn % 2 == 0) {
            this._checkOn += 1;
            return true;
        } else {
            this._checkOn += 1;
            return false;
        }
    }
}

