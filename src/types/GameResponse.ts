interface BoardData {
  [key: string]: string;
}

export interface GameResponse {
  difficulty: string;
  puzzle: Array<BoardData>;
}
