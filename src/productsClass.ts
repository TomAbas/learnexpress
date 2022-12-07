class Product {
  id: string;
  name: string;
  image: string;
  price: string;
  desc: string;
  constructor(
    id: string,
    name: string,
    image: string,
    price: string,
    desc: string
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.desc = desc;
  }
  printPrice() {
    console.log(this.price);
  }
}

const chai = new Product("1", "chai", "qew", "$12", "chai ne");
chai.printPrice();

class cat {
  name1: string;
  sound: string;
  me1o: string | undefined;
  coneo: string;
  constructor(name1: string, sound: string, meo?: string) {
    this.name1 = name1;
    this.sound = sound;
    this.me1o = meo;
    this.coneo = "213";
  }
  makeSound() {
    console.log(this.sound + " and " + this.name1 + " test " + this.me1o);
  }
}
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

const concop = new tiger("test", "test1", "conmeo2", "meomeo2", "ưqeqw");
concop.name1 = "test asigan";
concop.makeVoice();
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

console.log(Triple.triple());
console.log(Triple.triple(6));
console.log(BiggerTriple.triple(3));
