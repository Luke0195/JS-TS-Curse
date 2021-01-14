// Aula 04: Metódo static


// Metódos estaticos são métodos que só podemo ser acessados pela própria classe.

class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }

  aumentar(){
    this.volume +=2;
  }

  diminuir(){
    this.volume -=2;
  }

 static trocaPilha(){
   console.log('As pilhas foram trocadas')
 }

}

const c1 = new ControleRemoto('Samsung');
c1.aumentar();
c1.aumentar();
c1.aumentar();
console.log(c1);

ControleRemoto.trocaPilha();