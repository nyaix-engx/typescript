import { CSVFileReader, MatchResult } from "./csvFileReader";
import { dateStringtoDate } from "./utils";
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
export class MatchReader extends CSVFileReader<MatchData> {
  mapRow(value: string[]): MatchData {
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
}
