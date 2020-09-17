import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.reader("football.csv");
matchReader.load();

const summary = Summary.winsAnalysisAndConsoleReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
