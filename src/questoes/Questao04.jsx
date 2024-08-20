import React, { useEffect, useState } from 'react';

// Função que retorna Promise com dados pré escritos usando fetchData
const fetchData = () => {
  return new Promise((resolve) => {
    resolve([
      { capital: ["Dublin"], population: 4994724 },
      { capital: ["Nicosia"], population: 1207361 },
      { capital: ["Madrid"], population: 47351567 }
    ]);
  });
};

function Questao04() {
  const [capitais, setCapitais] = useState([]);
  const [maiorPopulacao, setMaiorPopulacao] = useState(null);
  const [menorPopulacao, setMenorPopulacao] = useState(null);


//Dentro do useEffect, fetchCapitais é uma função assync que chama fetchData, processa os dados e define o estado com as capitais com maior e menor população.
  useEffect(() => {
    const fetchCapitais = async () => {
      try {
        const data = await fetchData();
        setCapitais(data);

        if (data.length > 0) {
          const maior = data.reduce((max, item) => item.population > max.population ? item : max);
          const menor = data.reduce((min, item) => item.population < min.population ? item : min);
          setMaiorPopulacao(maior);
          setMenorPopulacao(menor);
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchCapitais();
  }, []);
 
  //Pesquisei como usar renderização condicional para reduzir a qntd de erros, sendo assim só há o return se maiorPopulacao && menorPopulacao estiverem disponíveis
  return (
    <div>
      <h1>Capitais</h1>
      {maiorPopulacao && menorPopulacao &&(
        <div>
          <p>Capital com Maior População: {maiorPopulacao.capital[0]} ({maiorPopulacao.population})</p>
          <p>Capital com Menor População: {menorPopulacao.capital[0]} ({menorPopulacao.population})</p>
        </div>
      )}
    </div>
  );
}

export default Questao04;
