import React, { useState } from 'react';
import data from "../data/questions_complete"; // Importe o seu objeto de dados

function Quiz() {
  // Combine todas as perguntas em uma única matriz
  const allQuestions = data.reduce((accumulator, category) => {
    return accumulator.concat(category.questions);
  }, []);

  // Embaralhe as perguntas
  const shuffledQuestions = shuffleArray(allQuestions);

  // Estado para controlar a pergunta atual
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Função para embaralhar uma matriz
  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  // Função para exibir a próxima pergunta
  function nextQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  // Verifica se ainda há perguntas a serem exibidas
  const hasMoreQuestions = currentQuestionIndex < shuffledQuestions.length;

  return (
    <div>
      {hasMoreQuestions ? (
        <div>
          <h2>Pergunta:</h2>
          <p>{shuffledQuestions[currentQuestionIndex].question}</p>
          <ul>
            {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          <button onClick={nextQuestion}>Próxima Pergunta</button>
        </div>
      ) : (
        <p>Parabéns, você respondeu todas as perguntas!</p>
      )}
    </div>
  );
}

export default Quiz;
