
let abd : string [] = ["Arthur","Boe","Chloe"];

let tmp: string = abd[0];

abd[0] = abd [2];
abd [2] = tmp;

console.log(abd);