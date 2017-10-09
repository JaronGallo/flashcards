//Requiring files
var Basic = require("./BasicCard");
var Cloze = require("./ClozeCard");

var i = new Basic.BasicCard("What is 1 + 1 equal?", "1 + 1 = 2");
console.log(i.front);
console.log(i.back);

var z = new Cloze.ClozeCard("Jaron is my first name", "Jaron");

console.log(z.fullText);
console.log(z.cloze);
console.log(z.partial);