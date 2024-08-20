import React from 'react';
import Questao02 from './questoes/Questao02';
import Questao04 from './questoes/Questao04';
import Questao03 from './questoes/Questao03';
import { Componente01A } from './questoes/Questao01';

function App() {
    return (
        <div>
            <h1>Questão 1</h1>
            <Componente01A />
            <br></br>
            <h1>Questão 2</h1>
            <Questao02 />
            <h1>Questao 3</h1>
            <Questao03 />
            <h1>Questão 4</h1>
            <Questao04 />
        </div>
    );
}

export default App;
