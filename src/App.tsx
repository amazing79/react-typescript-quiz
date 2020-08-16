import React, { useState } from 'react';
import './App.css';
//types 
import {GameStatus, TOTAL_QUESTIONS, AnswerObject, Difficulty, QuestionsState} from './assets/js/utils'
//API
import {fetchQuizQuestions} from './assets/js/API'
//components
import CuestionCard from './components/QuestionCard/CuestionCard'
import Score from './components/Score/Score'

function App() {

  const [ gameStatus, setGameStatus ] = useState(GameStatus.IDDLE);
  const [ questions, setQuestions ] = useState<QuestionsState[]>([]);
  const [ userAnswers, setUserAnswers ] = useState<AnswerObject[]>([]);
  const [ number, setNumber ] = useState(0);
  const [ score, setScore ] = useState(0);

  const startGame = async () =>  {
     setGameStatus(GameStatus.LOADING);
     let data =  await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
     setQuestions(data);
     setScore(0);
     setNumber(0);
     setUserAnswers([])
     setGameStatus(GameStatus.PLAYING);
  }

  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement>) => {
    if(gameStatus === GameStatus.PLAYING){

      let selectAnswer = e.currentTarget.value;
      let isCorrect = questions[number].correct_answer === selectAnswer ;
      if (isCorrect) {
        setScore( prev => prev + 1);
      }
      //armamos el objeto con la respuesta dle usuario
      let answerObj:AnswerObject = {
        question: questions[number].question,
        answer: selectAnswer, 
        correct: isCorrect, 
        correctAnswer: questions[number].correct_answer
      }

      setUserAnswers([...userAnswers, answerObj]);
      //setUserAnswers( prev => [ ...prev, answerObj]);
      if(userAnswers.length + 1 === TOTAL_QUESTIONS){
        setGameStatus(GameStatus.FINISHED);
      } 
    }
  }

  const nextQuestion = () => {
      setNumber( prev => prev + 1); 
  }

  return (
    <div className="App">
        <h1>React Quiz</h1>
        {
          gameStatus === GameStatus.IDDLE || gameStatus === GameStatus.FINISHED ? (
            <button className="start" onClick={startGame}>
              Start
            </button>
          )
          : null
        }
        { 
          gameStatus === GameStatus.LOADING ? (<p className="loading">Cargando Preguntas...</p>) : null
        }
        { 
          gameStatus === GameStatus.PLAYING  || gameStatus === GameStatus.FINISHED ? 
        (
        <>
            <Score fine={score} />
            <CuestionCard 
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
        </>
        )
        : null 
        }
        {
          gameStatus === GameStatus.PLAYING && userAnswers.length === number + 1 && number < TOTAL_QUESTIONS -1 
          ? (<button className="next" onClick={nextQuestion}>
              Next Question
          </button>)
          :null
        }
    </div>
  );
}

export default App;
