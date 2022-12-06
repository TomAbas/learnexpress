interface product {
  id: string;
  name: string;
  image: string;
  price: string;
  desc: string;
}
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
}
