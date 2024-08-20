import React from 'react';


//Temos dois componentes, um que calcula e exibe o maior valor de cada objeto em uma lista e outro que fornece a lista e passa para o primeiro componente

//Na function Componente01B usaremos o método .map na lista recebida como propriedade pelo componente01A e após isso aplicaremso math.max para retornar o maior valor dentre os elementos de cada "sublista"
export function Componente01B(props) {
  return (
    <div>
      <ul>
        {props.lista.map((item, index) => {
          const maior = Math.max(item.a, item.b, item.c);
          return (
            <li key={index}>
              {index + 1}: {maior}
            </li>
          );
        })}
      </ul>
    </div>
  );
}


//Serve basicamente para criar uma lsita de objetos e passar essa lista como propriedade para componente01B
export function Componente01A() {
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 10 }
  ];

  return (
    <div>
      <Componente01B lista={lista} />
    </div>
  );
}