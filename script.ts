/*

========== EXERCÍCIO PRÁTICO RÁPIDO ==========
========== Complete o código abaixo ========== 
========== typescript ==========

*/
// 1. Crie um tipo literal para cor com: "vermelho", "azul", "verde"
// type Cor = _________________________; 

    type Cor = "vermelho" | "azul" | "verde";

// 2. Crie um tipo Carro com: 
    // - marca (string, readonly) 
    // - modelo (string)  
    // - cor (do tipo Cor acima) 
    // - ano? (opcional, number) 
//  type Carro = { _________________________ }; 

        type Carro = {
        readonly marca: string;
        modelo: string;
        cor: Cor;
        ano?: number;
        };


// 3. Crie uma função Generic que retorne o primeiro elemento de um array

//function primeiro<T>(______): ______ { 
//return ______[0]; }

function primeiro<T>(array: T[]): T | undefined { 
    return array[0]; 
}

const listaNumeros = [1, 2, 3, 4, 5, 6];
const primeiroNumero = primeiro(listaNumeros);
console.log(primeiroNumero); // retorna o número 1

const propriedadesCarro = ['marca: "Fiat"', 'modelo: "Uno"', 'cor: "azul"', 'ano: 2000'];
const primeiroItem = primeiro(propriedadesCarro);
console.log(primeiroItem); // retorna marca: "Fiat"


