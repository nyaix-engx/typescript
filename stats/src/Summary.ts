import { MatchData } from "./MatchData";
import { WinsAnalyzer } from "./Analyzer/WinsAnalyzer";
import { ConsoleReport } from "./ReportTarget/ConsoleReport";
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisAndConsoleReport(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), new ConsoleReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(match: MatchData[]): void {
    const output = this.analyzer.run(match);
    this.outputTarget.print(output);
  }
}
