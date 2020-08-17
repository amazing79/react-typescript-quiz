import React, {useState, useEffect, useContext} from 'react'
//types 
import {GameStatus, TOTAL_QUESTIONS, AnswerObject, QuestionsState, Actions} from '../../assets/js/utils'
import CuestionCard from '../QuestionCard/CuestionCard'
import Score from '../Score/Score'
//API
import {fetchQuizQuestions} from '../../assets/js/API'
//context
import {SettingContext} from '../../context/SettingProvider'

const GamePanel = (props:any) => {

  const [ userAnswers, setUserAnswers ] = useState<AnswerObject[]>([]);
  const [ questions, setQuestions ] = useState<QuestionsState[]>([]);
  const [ gameStatus, setGameStatus ] = useState(GameStatus.LOADING);
  const [ number, setNumber ] = useState(0);
  const [ score, setScore ] = useState(0);

  //valores del contexto 
  const myContext = useContext(SettingContext);

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

        if(userAnswers.length + 1 === TOTAL_QUESTIONS){
          setGameStatus(GameStatus.FINISHED);
        } 
      }
    }

  const nextQuestion = () => {
    setNumber( prev => prev + 1); 
  }

  const goBack = () => {
      if (gameStatus === GameStatus.PLAYING) {
          alert('YA nos vamos? Termina el juego topu');
          return
      }
      props.setAction(Actions.SHOW_INDEX);
  }

  useEffect(()=>{
      const startGame = async () =>  {
        setGameStatus(GameStatus.LOADING);
        let data =  await fetchQuizQuestions(TOTAL_QUESTIONS, myContext.getConfiguration());
        setQuestions(data);
        setScore(0);
        setNumber(0);
        setUserAnswers([])
        setGameStatus(GameStatus.PLAYING);
       };
      startGame();
    }
    ,[myContext]);

    return (
      <>
       { gameStatus === GameStatus.LOADING ? (<p className="loading">loading, please wait!</p>)
        : (<>
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
        }
        {
          gameStatus === GameStatus.PLAYING && userAnswers.length === number + 1 && number < TOTAL_QUESTIONS -1 
          ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>)
          :(
            <div>
                <button className="options" onClick={goBack}>Regresar</button>
          </div>
          )
        }
      </>
    )
}

export default GamePanel
