import { Person } from "./person";

export class Contacts {
  public people: Person[];

  constructor() {
    this.people = [];
  }

  public printCalendar(): void {
    this.people.forEach(person => {
      console.log(`Name: ${person.name}, Age: ${person.age}, Address: ${person.getAddress()}`);
    });
  }
}
