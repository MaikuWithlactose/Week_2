import { Persona } from "./person";
let hobbiesPersona = ["Musica","Leer","Hacer ejercicio", "Tocar la pandereta"]
let person = new Persona.Person("Pepilla", 25, "Calle Jamón",hobbiesPersona);

person.CalcularIMC(20,180)
console.log(person.yearOfBirth(2023)); 
console.log(person.printAll()); 
console.log(person.printHobbies()); 
