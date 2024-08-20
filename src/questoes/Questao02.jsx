import React, { useState } from 'react';

//Bom, eu tentei fazer uma maneira de trocar as imgs sem precisar de duas conts, mas n consegui e apelei a internet, basicamente tenho um usestate para trocar a imagem sem precisar fazer muitas linhas de verificação
function Questao02() {
  const [isFront, setIsFront] = useState(true);

  const frontImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png';
  const backImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/34.png';

  const toggleImage = () => {
    setIsFront(!isFront);
  };
//Nesse return tenho a img formatada e logo em seguida o botão que identifica o estado da img e mostra o inverso dql estado no botão, ex: img está de frente então o bttn mostra 'Mostrar Costas'
  return (
    <div>
      <h1>Pokémon</h1>
      <img
        src={isFront ? frontImageUrl : backImageUrl}
        alt='Pokémon'
        style={{ width: '300px', height: 'auto' }}
      />
      <button onClick={toggleImage} style={{ marginTop: '20px' }}>
        {isFront ? 'Mostrar Costas' : 'Mostrar Frente'}
      </button>
    </div>
  );
}
//Perdão, mas n consigo escrever + de 2 comentários para essa questão
export default Questao02;
