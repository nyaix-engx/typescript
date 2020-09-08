import { Sorter } from "./sorter";

export class StringCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const stringArray = this.data.split("");
    const leftHand = stringArray[leftIndex];
    stringArray[leftIndex] = stringArray[rightIndex];
    stringArray[rightIndex] = leftHand;
    this.data = stringArray.join("");
  }
}
