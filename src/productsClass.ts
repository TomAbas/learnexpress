export class Product {
  featured: boolean;
  rating: number;
  createAt: Date;
  price: number;
  name: string;
  company: string;
  constructor(
    featured: boolean,
    rating: number,
    createAt: Date,
    price: number,
    name: string,
    company: string
  ) {
    this.featured = featured;
    this.rating = rating;
    this.createAt = createAt;
    this.price = price;
    this.name = name;
    this.company = company;
  }
  printPrice() {
    console.log(this.price);
  }
}

class cat {
  name123: string = "hekk";
  sound: string;
  me1o: string | undefined;
  coneo: string;
  private nametestih = "con meo cua toi";
  constructor(name1: string, sound: string, meo?: string) {
    this.name123 = name1;
    this.sound = sound;
    this.me1o = meo;
    this.coneo = "213";
  }
  getName() {
    return this.nametestih;
  }
  makeSound() {
    console.log(this.sound + " and " + " test " + this.me1o);
  }
}
let newCat: cat = new cat("fdhjf", "vjdn");
const conmeo = new cat(" conmeo ", " meomeo ", " qwe ");
// conmeo.makeSound();

class tiger extends cat {
  test: string;
  test1: string;
  // name1: string;
  // sound: string;
  constructor(
    test: string,
    test1: string,
    naqweqwme1: string,
    soasdund: string,
    meo123: string,
    meo: string
  ) {
    super(naqweqwme1, soasdund);
    this.test = soasdund;
    this.test1 = test1;
    this.sound = soasdund;
    this.me1o = meo123;
  }
  makeVoice() {
    super.makeSound();
  }
}

const dan = new tiger("1", "2", "3", "4", "5", "6");
console.log(dan);
class Triple {
  // Using the 'static' keyword creates a method which is associated
  // with a class, but not with an instance of the class.
  static triple(n?: number) {
    n = n || 1;
    return n * 3;
  }
}

// super.prop in this example is used for accessing super-properties from
// a parent class. This works fine in static methods too:
class BiggerTriple extends Triple {
  static triple(n: number) {
    return super.triple(n) * super.triple(n);
  }
}

// console.log(Triple.triple());
// console.log(Triple.triple(6));
// console.log(BiggerTriple.triple(3));
