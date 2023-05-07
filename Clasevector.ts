class Vector {
    private elements: number[];
  
    constructor(n: number, k: number) {
      this.elements = new Array<number>(n);
      for (let i = 0; i < n; i++) {
        this.elements[i] = Math.floor(Math.random() * (k + 1));
      }
    }
  
    public print(): void {
      console.log(this.elements);
    }
  
    public add(v1: Vector): Vector {
      if (this.elements.length !== v1.elements.length) {
        throw new Error("Los vectores deben tener la misma longitud");
      }
      const result = new Vector(this.elements.length, 0);
      for (let i = 0; i < this.elements.length; i++) {
        result.elements[i] = this.elements[i] + v1.elements[i];
      }
      return result;
    }
  
    public subs(v1: Vector): Vector {
      if (this.elements.length !== v1.elements.length) {
        throw new Error("Los vectores deben tener la misma longitud");
      }
      const result = new Vector(this.elements.length, 0);
      for (let i = 0; i < this.elements.length; i++) {
        result.elements[i] = this.elements[i] - v1.elements[i];
      }
      return result;
    }
  
    public mult(v1: Vector): Vector {
      if (this.elements.length !== v1.elements.length) {
        throw new Error("Los vectores deben tener la misma longitud");
      }
      const result = new Vector(this.elements.length, 0);
      for (let i = 0; i < this.elements.length; i++) {
        result.elements[i] = this.elements[i] * v1.elements[i];
      }
      return result;
    }
  
    public multNumber(n: number): Vector {
      const result = new Vector(this.elements.length, 0);
      for (let i = 0; i < this.elements.length; i++) {
        result.elements[i] = this.elements[i] * n;
      }
      return result;
    }
  }
  