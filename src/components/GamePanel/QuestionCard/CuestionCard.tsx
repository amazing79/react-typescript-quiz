import React from 'react'
import './CuestionCard.css'

import {AnswerObject} from '../../../assets/js/utils'
//aclaracion, en el tutorial usa un retorno implicito, seria algo como 
// const CuestionCard = () => ( ... y aca todo el codigo, pero es cuestion de gustos)
/*
 Empezando a usar typescript. Ahora declaramos a nuestro componente de tipo funcionanl component (un tipo propuesto por react).
 Ademas, creas nuestro tipo Props, que va a decir qeu este tipo FC, tendra los valores de Props
*/
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
  };

const CuestionCard: React.FC<Props> = (props: Props) => {

    let { question, answers, callback, userAnswer, questionNr, totalQuestions } = props;
    const wrong = 'wrong';
    const correct = 'correct';
    const normal = '';

    return (
    <div className="CuestionCard-container">
        <p className='number'>
          Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div className="CuestionCard-PanelButton">
          {answers.map((answer) => (
              <button  key={answer} 
              className={`CuestionCard-button ${userAnswer?.correctAnswer === answer ? correct : ((userAnswer?.answer === answer) && (userAnswer?.correctAnswer !== answer) )?  wrong : normal }`} 
              disabled={userAnswer ? true : false} 
              value={answer} 
              onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
          ))}
        </div>
      </div>
    )
}

export default CuestionCard
