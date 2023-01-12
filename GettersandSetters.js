class Animal {
  #price;
  constructor(name) {
    this.name = name;
  }

  set price(price) {
    this.#price = price;
  }
  get price() {
    return this.#price;
  }
}

const cat = new Animal("pussy");
cat.price = 4000;

console.log(cat);
console.log(cat.price);
