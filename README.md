Claro, aqui está o texto em formato puro:

# Busca Binária

A busca binária é um algoritmo eficiente para encontrar um elemento em uma lista ordenada. Ele segue uma abordagem de "dividir e conquistar", reduzindo pela metade o número de elementos a serem verificados em cada passo.

#### Requisitos para utilizar o algoritmo
A lista deve estar ordenada.

#### Inicialização:
Defina dois índices, início e fim, que representam os limites da área da lista onde a busca será realizada. Inicialmente, início é o índice do primeiro elemento (0) e fim é o índice do último elemento (n-1).

#### Passo Iterativo:
- Calcule o índice do meio da lista: meio = (início + fim) / 2.
- Compare o elemento do meio (lista[meio]) com o valor buscado:
    - Se lista[meio] for igual ao valor buscado, a busca é bem-sucedida e o índice do meio é retornado.
    - Se lista[meio] for menor que o valor buscado, atualize início para meio + 1 (a busca continua na metade direita da lista).
    - Se lista[meio] for maior que o valor buscado, atualize fim para meio - 1 (a busca continua na metade esquerda da lista).
- Condição de Parada:
    - O algoritmo repete o passo iterativo até que o valor seja encontrado ou até que início seja maior que fim (indicando que o valor não está presente na lista).
    - Resultado: Se o valor for encontrado, o índice do valor é retornado. Caso contrário, o algoritmo retorna um valor indicativo de falha.

### Requisitos para utilizar os testes
- NodeJS

### Instalação e utilização
Para rodar o projeto localmente e realizar os testes, siga os seguintes passos:

Clone o repositório localmente
```sh
   git clone https://github.com/laurentino14/binary-search-ts.git
```

Instale as dependências
```sh
    npm install
```

Altere a lista para o tamanho desejado no seguinte script localizado na linha 4:
```js
for (let i = 1; i < 1000001 /* <= tamanho desejado da lista */; i++) {
    mockList.push(i);
}
```

Execute em modo de desenvolvimento
```sh
    npm run dev
```

Observe os logs no terminal após a execução.
