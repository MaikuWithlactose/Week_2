class Contacts {

  constructor(Personas) {
    this.personas = Personas;
  }

  printPersons()
  {
    this.personas.forEach(persona => {
      console.log(`Name: ${persona.Name}, Age: ${persona.age}, Address: ${persona.getAddress()}`);
    });
  }

}


module.exports = { Contacts };