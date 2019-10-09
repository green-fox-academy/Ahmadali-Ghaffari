"use strict";

let person = {
    name: "Joe",
    age: 42,
    2017: 5,
    friends: ["Cait", "Lucas"],
    greeting: function (value: number) { console.log("Hello world! " + value.toString()); },
    favoriteObjects: {
        color: "black",
        size: 15
    }
}
//console.log(person);
//person.greeting(7);
//console.log(person.name);
//console.log(Object.keys(person));
let values = Object.keys(person).map(function (element) {
    return person[element];
});
//console.log(values);
//let key: string = "name";
//console.log(person[key]);
//console.log(person["friends"]);
//console.log(person.favoriteObjects.color);
//console.log(person.favoriteObjects.size);
//person["height"] = 176;
//console.log(person["height"]);
//console.log(person);

let generalText = "kshakjaxhkASJHSKJHSADLKDSAHJKKLAJLAjdlakdlsadjkhkjashgdksadkfghjkl;gggggggggggggg";
let characterOccurance = new Object;

function mostCharacter(text: string): string {

    for (let i = 0; i < generalText.length; i++) {
        if (characterOccurance.hasOwnProperty(generalText.charAt(i))) {
            characterOccurance[generalText.charAt(i)] += 1;
        } else {
            characterOccurance[generalText.charAt(i)] = 1;
        }
        console.log(characterOccurance);
        //console.log(Object.keys(characterOccurance));
    }
    let max = 0;
    let maxKey = '';

    Object.keys(characterOccurance).forEach(function (element) {
        if (characterOccurance[element] >= max) {
            max = characterOccurance[element];
            maxKey = element;
        }
    })
    return maxKey;
}
//console.log("The Most occured Character is :" + mostCharacter(generalText));

/*let array3: number[] = [1, 2, 4, 66, 46, 8, 3, 5, 4, 8, 7];
function countEven(array: number[]): number {
    let counter: number = 0;
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] % 2 == 0) {
            counter = counter + 1;
        }

    }
    return counter;
}
console.log(countEven(array3));
*/
let array4: number[] = [6, 7, 5, 5, 5, 2, 4, 5, 7, 4, 32, 5, 7, 8765, 56, 4332, 5];
function countEven2(array: number[]): number {
    let counter2: number = 0;
    array4.forEach(function (element) {
        if (element % 2 == 0) {
            counter2 += 1;
        }
    });
    return counter2;
}
console.log(countEven2(array4));

