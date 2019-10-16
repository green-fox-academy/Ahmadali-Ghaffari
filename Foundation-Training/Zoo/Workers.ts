'use strict';

import { Animal } from "./Animal";

export class Workers {

    protected _name: string;
    public _animalsToLookAfter: Animal[];

    constructor(name: string, animalsToLookAfter: Animal[] = []) {
        this._name = name;
        this._animalsToLookAfter = animalsToLookAfter;
    }

    public doDailyRoutine(): void {
        this._animalsToLookAfter.forEach(function (element) {
            if (element.isHungry()) {
                element.eat();
            }
        });
    }
}