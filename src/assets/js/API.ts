
import {Question, QuestionsState } from './utils'

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);
/*
url generada 
https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=boolean
*/
export const fetchQuizQuestions = async (amount: number, setting:string): Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}${setting}`;
    console.log(`Mira esa endpoint, papa: ${endpoint}`);
    //doble await, uno por el fecth y otro para el json.
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }))
};