'use name';

export abstract class Animal {
    public _name: string;
    protected _ownerName: string;
    public _isHealthy: boolean;
    public abstract _healCost: number;

    public heal(): void {
        this._isHealthy = true;
    }

    constructor(name: string, ownerName: string, isHealthy: boolean) {
        this._name = name;
        this._ownerName = ownerName;
        this._isHealthy = isHealthy;
    }

    public isAdoptable(): boolean {
        if (this._isHealthy) {
            return true;
        } else {
            return false;
        }
    }

    public toString(): string {
        if (this._isHealthy == false) {
            return `${this._name} is not healty(${this._healCost}€), and not adoptable`
        } else {
            return `${this._name} is healthy, and adoptable`
        }
    }
}