export enum GameStatus {
  FINISHED = 'FINISHED',
  IDDLE = 'IDDLE',
  LOADING ='LOADING',
  PLAYING = 'PLAYING'
  };

export enum Actions {
  SHOW_INDEX = "SHOW_INDEX",
  SHOW_GAME = "SHOW_GAME",
  SHOW_OPTIONS = "SHOW_OPTIONS"
}

export enum Difficulty {
  ANY = "",
  EASY = "&difficulty=easy",
  MEDIUM = "&difficulty=medium",
  HARD = "&difficulty=hard",
}
/*
  <option value="any">Any Category</option>
  <option value="9">General Knowledge</option>
  <option value="10">Entertainment: Books</option>
  <option value="11">Entertainment: Film</option>
  <option value="12">Entertainment: Music</option>
  <option value="13">Entertainment: Musicals &amp; Theatres</option>
  <option value="14">Entertainment: Television</option>
  <option value="15">Entertainment: Video Games</option>
  <option value="16">Entertainment: Board Games</option>
  <option value="17">Science &amp; Nature</option>
  <option value="18">Science: Computers</option>
  <option value="19">Science: Mathematics</option>
  <option value="20">Mythology</option>
  <option value="21">Sports</option>
  <option value="22">Geography</option>
  <option value="23">History</option>
  <option value="24">Politics</option>
  <option value="25">Art</option>
  <option value="26">Celebrities</option>
  <option value="27">Animals</option>
  <option value="28">Vehicles</option>
  <option value="29">Entertainment: Comics</option>
  <option value="30">Science: Gadgets</option>
  <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
  <option value="32">Entertainment: Cartoon &amp; Animations</option>		
*/
export enum Category{
  ANY = "",
  GENERAL = "&category=9",
  EntertainmentBooks = "&category=10",
  EntertainmentFilms = "&category=11",
  EntertainmentMusic = "&category=12",
  EntertainmentMusicalAndTheatres = "&category=13",
  EntertainmentTelevision = "&category=14",
  EntertainmentVideoGames = "&category=15",
  ScienceComputers = "&category=18",
  ScienceMatematics = "&category=19",
  Mithology = "&category=20",
  Sports = "&category=21",
  Geography = "&category=22",
  History = "&category=23"
}

export enum TypeQuiz {
    ANY = "",
    MULTIPLE = '&type=multiple',
    TRUEFALSE = '&type=boolean'
}

export type settingObject = {
  category: Category,
  difficulty: Difficulty,
  type: TypeQuiz
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