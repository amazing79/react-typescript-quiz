
import {Difficulty, Question, QuestionsState } from './utils'

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    //doble await, uno por el fecth y otro para el json.
    const data = await (await fetch(endpoint)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        }))
};