class Person 
{  
    constructor(Name, age, address, hobbies) {
      this.Name = Name;
      this.age = age;
      this.address = address;
      this.hobbies = hobbies;
    }
  

    printAll()
    {
      console.log("-> Nombre: "+this.Name+" - Edad: "+this.age+" - Dirección: "+this.address+".");
    }
  
    yearOfBirth(currentYear) 
    {
      return currentYear - this.age;
    }
  
    setAddress(address) 
    {
      this.address = address;
    }
  
    getAddress() 
    {
      return this.address;
    }

    printHobbies()
    {
      return this.hobbies.map( q => q )
    }

    CalcularIMC(peso, altura) {
      console.log("Calculando IMC ")
      console.log("Peso : "+ peso)
      console.log("Altura : "+ altura)
  
      let IMC = ( (peso)/ (altura*altura) ) *10000;
      console.log("IMC es : "+ IMC)
  
      let MensajeResultado = 'Usted está en la categoría : ';
  
      if( IMC < 18.5 )
      {
          MensajeResultado += 'Bajo peso.';
      }
      else if( IMC >= 18.5 & IMC < 24.9 )
      {
          MensajeResultado += 'Adecuado.';
      }
      else if( IMC >= 25.0 & IMC < 29.9 )
      {
          MensajeResultado += 'Obesidad grado I.';
      }
      else if( IMC >= 30.0 & IMC < 34.9 )
      {
          MensajeResultado += 'Obesidad grado II.';
      }
      else if( IMC >= 40.0 )
      {
          MensajeResultado += 'Obesidad grado III.';
      }
      else
      {
          MensajeResultado = 'No hay valores válidos';
      }
      console.log(MensajeResultado)
  }
}

module.exports = { Person };
  
