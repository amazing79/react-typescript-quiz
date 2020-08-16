export enum GameStatus {
    FINISHED = 'FINISHED',
    IDDLE = 'IDDLE',
    LOADING ='LOADING',
    PLAYING = 'PLAYING'
  };

  export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
  }
  //Este tipo se crea para guarda la respuesta de nuestra Api. Este lo pondemos consultar usando Postman y vemos que devuelve
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};
 //Este tipo contiene, las preguntas que obtenemos de nuestra API, mas la respuesta del usuario.
 // Con el operador & decimos que nuestro tipo va a tener todo lo que tiene Question, mas la propiedad answers)
export type QuestionsState = Question & { answers: string[] };

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
};

export const TOTAL_QUESTIONS = 10;