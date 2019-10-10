'use strict'

import { Animal } from "./Animal"

class Cat extends Animal {

    constructor(animalName) {
        super()
        this._healCost = Math.floor(Math.random() * 7)

    }

}