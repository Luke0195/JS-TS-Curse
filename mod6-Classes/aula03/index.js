// Herança com classes

class DispositivoEletronico{
   constructor(nome){
     this.nome = nome;
     this.ligado =false;
   }

   ligar(){
     if(this.ligado){
       console.log(`${this.nome} ligado`);
       return
     }
     this.ligado = true
   }

   desligar(){
     if(!this.ligado){
       console.log(`${this.ligado}Dispositivo já desligado`)
       return;
      }
      this.ligado = false
   }
  
  }

// Quando herdamos uma classe precisamos usar a super da classe herdada
class SmartPhone extends DispositivoEletronico {

  constructor(nome,color, description){
    super(nome);
    this.color = color;
    this.description = description;
  }

}

const s1 = new SmartPhone('Iphone 12Pro', 'preta', 'Um celular que custa o olho da cara e não vem carregador');
const mi11Pro = new SmartPhone('Mi 11 Pro', '')
console.log(s1);


class Tablet extends  DispositivoEletronico{
  constructor(nome, marca){
   super(nome);
   this.marca = marca;
  }
}

const t1 = new Tablet('iPad', true);
t1.ligar();
console.log(t1);