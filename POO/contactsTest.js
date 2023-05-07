let ContactClass = require("./contacts");
let PersonaClass = require("./person.js");

const person1 = new PersonaClass.Person("Isaac", 24, "Av. pedo 123");
const person2 = new PersonaClass.Person("Pipe", 29, "Calle culo 456");
const person3 = new PersonaClass.Person("Siro", 28, "Av. caca 789");

let ListaContactos = [person1,person2,person3]

const contacts = new ContactClass.Contacts(ListaContactos);

contacts.printPersons();
