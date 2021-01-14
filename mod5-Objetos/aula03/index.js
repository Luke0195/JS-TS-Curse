// Aula 03: Getters e Setters

function CreateProduct(productName, productPrice, productStore){
  this.productName = productName;
  this.productPrice = productPrice;

  let privateStore = productStore;
  Object.defineProperty(this, 'productStore',{
    configurable: true,
    enumerable: true,
    get: function(){
      return privateStore;
    },
    
    set: function(valor){
     if(typeof(valor)!== 'number'){
       console.log('Bad value');
       return
     }
     privateStore = valor
    }
    
   
  })
}


const product1 = new CreateProduct('T-shirt', 30, 8);
product1.productStore = '434ksf';

console.log(product1.productStore);

