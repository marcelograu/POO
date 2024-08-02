

const carro = {
    modelo: "fusca",
    fabricante: "VW",
    ano: 1968,
    kmRodado: 400,
    cor: preto,
    
}


const cachorro =  {
    //atributos
    raca: "vira-lata rebaixado",
    cor: 'branco',
    sexo: 'fêmea',
    tamanho: 'pequeno',
    peso: '14kg',
    idade: 3,
    nome: "Braquinha",
    //comportamentos
    seApresentar: function () {
    console.log( "Oi meu nome é ", this.nome, "minha raça é ", this.raca)
    },
    latir: function() {
        console.log("AHAHUAHAUHAHA AHAHA AU AUAU AUA AUA AU AU ")
    },
    rosnar: function(){
        console.log('GRRRRRRRRRRRRRR!!!')
    },
    
}

console.log(   

  cachorro.cor,


)