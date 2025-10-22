<!-- ...existing code... -->

# EXERCÍCIO PRÁTICO RÁPIDO
Complete o código abaixo — TypeScript.

## Enunciado
1. Crie um tipo literal para cor com: "vermelho", "azul", "verde"  
2. Crie um tipo `Carro` com:  
   - `marca` (string, `readonly`)  
   - `modelo` (string)  
   - `cor` (do tipo `Cor` acima)  
   - `ano?` (opcional, `number`)  
3. Crie uma função genérica que retorne o primeiro elemento de um array.

## Solução (código)
````typescript
type Cor = "vermelho" | "azul" | "verde";

type Carro = {
    readonly marca: string;
    modelo: string;
    cor: Cor;
    ano?: number;
};

function primeiro<T>(array: T[]): T | undefined {
    return array[0];
}

const listaNumeros = [1, 2, 3, 4, 5, 6];
const primeiroNumero = primeiro(listaNumeros);
console.log(primeiroNumero); // retorna o número 1

const propriedadesCarro = ['marca: "Fiat"', 'modelo: "Uno"', 'cor: "azul"', 'ano: 2000'];
const primeiroItem = primeiro(propriedadesCarro);
console.log(primeiroItem); // retorna marca: "Fiat"