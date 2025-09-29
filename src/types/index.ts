export type Question = {
  id: string;
  text: string;
  answers: { id: string; text: string; correct: boolean }[];
};

export type ScoreEntry = {
  id: string;
  name: string;
  score: number;
  dateISO: string;
};
