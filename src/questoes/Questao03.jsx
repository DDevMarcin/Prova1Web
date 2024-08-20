import React, { useEffect, useState } from 'react';
//SOfri nessa questão pq n sabia usar o useEffect direito, então tive q aprender nessa questão, basicamente fiz as consts para amazenar os dados requisitado, acabei n usando capitais, eusando useEffect e async/wait para buscar os dados da API
function Questao3() {
  const [capitais, setCapitais] = useState([]);
  const [maiorPopulacao, setMaiorPopulacao] = useState(null);
  const [menorPopulacao, setMenorPopulacao] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
        const data = await response.json();
        setCapitais(data);

        //verificação dos maiores númesmo e guardo na cost para a verificação da renderização
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

    fetchData();
  }, []);
//Ao final da função uso fetchData e se não acontecer nenhum erro para buscar os dados da Api no catch(error) o códido finaliza sem erros
  return (
    <div>
      <h1>Capitais da Europa</h1>
      {maiorPopulacao && menorPopulacao &&(
        <div>
          <p>Capital com Maior População: {maiorPopulacao.capital[0]} ({maiorPopulacao.population})</p>
          <p>Capital com Menor População: {menorPopulacao.capital[0]} ({menorPopulacao.population})</p>
        </div>
      )}
    </div>
  );
}

export default Questao3;
