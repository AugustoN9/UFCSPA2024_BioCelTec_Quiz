import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import rodape from './footer';
import "./Welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <h2>Seja bem-vindo</h2>
            <div className='imagem'></div>
            <p>Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({type: "CHANGE_STAGE"})}>
                Iniciar
            </button>
            <rodape />

        </div>
    )
}

export default Welcome