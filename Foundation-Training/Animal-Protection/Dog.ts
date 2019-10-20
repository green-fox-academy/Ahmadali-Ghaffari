'use strict';
import { Animal } from "./Animal"

class Dog extends Animal {
    _healCost = Math.floor(Math.random() * 8) + 1;
}