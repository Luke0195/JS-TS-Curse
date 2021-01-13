// Aula 02: Object.define Property() e Object.defineProperties()

// defineProperty -> define uma propriedade do objeto.

function CreateProduct(productName, productPrice,  productStore){
  // defineProperties -> define várias propriedades do objeto
  Object.defineProperties(this, {
    productName:{
      enumerable: true,
      value: productName,
      writable: true,
      configurable: false,
    },

    productPrice:{
      enumerable:true,
      value: productPrice,
      writable: false,
      configurable: true,
    },
    productStore:{
      enumerable: false,
      value: productStore,
      writable: true,
      configurable: false,
    }
  })
 
}

const product1 = new CreateProduct('T-shirt', 30, 8);
delete product1.productPrice;
console.log(product1);

// defineProperties -> define varias propriedades do objeto.

/*
  Object.defineProperty(this, 'productStore',{ 
// primeiro paramêtro é o objeto , 2 nome da propriedade, é um objeto contento as descrições dos atributos
   enumerable:true, // vai poder ser exibido em console.logs e fors
   value: productStore, // valor do produto
   writable: false, // o valor pode ser alterado
   configurable: false // a chave poder ser apagado.
  })
*/