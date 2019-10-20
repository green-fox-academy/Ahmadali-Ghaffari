'use strict';
import { Animal } from "./Animal"

class Parrot extends Animal {
    _healCost = Math.floor(Math.random() * 7) + 4;
}