'use strict';
import { Animal } from "./Animal"

class Cat extends Animal {
    _healCost = Math.floor(Math.random() * 7);
}