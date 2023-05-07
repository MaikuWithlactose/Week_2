let PersonaClass = require("./person.js");
let hobbiesPersona = ["Musica","Leer","Hacer ejercicio", "Tocar la pandereta"]
let person = new PersonaClass.Person("Pepilla", 25, "Calle Jamón",hobbiesPersona);

//Reto 2
person.CalcularIMC(20,180)
//Reto 3
console.log(person.yearOfBirth(2023)); 
//Reto 4
console.log(person.printAll()); 
//Reto 5
console.log(person.printHobbies()); 
