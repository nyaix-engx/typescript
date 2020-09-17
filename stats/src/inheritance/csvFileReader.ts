import fs from "fs";
export enum MatchResult {
  "HomeWin" = "H",
  "AwayWin" = "A",
  "Draw" = "D",
}

export abstract class CSVFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}

  abstract mapRow(value: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
