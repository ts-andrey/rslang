class WordAudiocall {
  // id: string;
  word: string;

  image: string;

  audio: string;

  wordTranslate: string;

  numberRightAnswer: number;

  answers: Array<string>;

  constructor(
    // id: string,
    word: string,
    image: string,
    audio: string,
    wordTranslate: string,
    numberRightAnswer: number,
    answers: Array<string>,
  ) {
    // this.id = id;
    this.word = word;
    this.image = image;
    this.audio = audio;
    this.wordTranslate = wordTranslate;
    this.wordTranslate = wordTranslate;
    this.answers = answers;
  }
}

export { WordAudiocall };
