import { dateStringtoDate } from "./utils";
import { MatchData } from "./MatchData";
import { CSVFileReader } from "./csvFileReader";

export enum MatchResult {
  "HomeWin" = "H",
  "AwayWin" = "A",
  "Draw" = "D",
}

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static reader(filename: string): MatchReader {
    return new MatchReader(new CSVFileReader(filename));
  }
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
