// Aula06: Manipulando Prototypes

function CreateProduct(name, price){
  this.name = name;
  this.price = price;
}

CreateProduct.prototype.applyDescont = function(number){
  this.price =  this.price - (this.price * (number/100));
  return this.price
}

CreateProduct.prototype.addPrice = function(number){
  this.price = this.price + number;
  return this.price;
}



const product1 = new CreateProduct('T-shirt', 30);
//Literal
const product2 = {
  name: 'Monitor',
  price: 200
}

Object.setPrototypeOf(product2,CreateProduct.prototype);

console.log(product2.applyDescont);






/*
const objetoA ={ 
  chaveA: 'A'
}

const objetoB ={ 
  chaveB: 'B'
}


const objetoC ={ 
  chaveC: 'C'
}


Object.setPrototypeOf(objetoB, objetoA); // Nos permite setar a herança um outro objeto através de prototype
Object.setPrototypeOf(objetoC, objetoB);


*/