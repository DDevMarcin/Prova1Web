//Props drilling é um problema comum em React que ocorre quando é necessário passar dados por vários níveis de componentes, o que torna a gestão do código muito difícil, principalmente quando os dados precisam ser transmitidos através de muitos componentes intermediários.

import React from 'react';

function Child({ data }) {
  return <div>Dados recebidos: {data}</div>;
}

function Parent({ data }) {
  return <Child data={data} />;
}

function App() {
  const data = "Informação importante";
  
  return (
    <div>
      <h1>Exemplo de Props Drilling</h1>
      <Parent data={data} />
    </div>
  );
}

export default App;






