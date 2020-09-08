import { dateStringtoDate } from "./utils";
export enum MatchResult {
  "HomeWin" = "H",
  "AwayWin" = "A",
  "Draw" = "D",
}
type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (value: string[]): MatchData => {
        return [
          dateStringtoDate(value[0]),
          value[1],
          value[2],
          parseInt(value[3]),
          parseInt(value[4]),
          value[5] as MatchResult,
          value[6],
        ];
      }
    );
  }
}
