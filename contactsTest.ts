import { Contacts } from "./contacts";
import { Person } from "./person";

const contacts = new Contacts();

const person1 = new Person("isaac", 24, "Av. pedo 123");
const person2 = new Person("Pipe", 29, "Calle culo 456");
const person3 = new Person("Siro", 28, "Av. caca 789");

contacts.people.push(person1);
contacts.people.push(person2);
contacts.people.push(person3);

contacts.printCalendar();
