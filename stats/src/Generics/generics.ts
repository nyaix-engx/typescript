// class ArrayOfNumbers {
//   constructor(public data: number[]) {}
//   get(index: number): number {
//     return this.data[index];
//   }
// }

// class ArrayOfString {
//   constructor(public data: string[]) {}
//   get(index: number): string {
//     return this.data[index];
//   }
// }

// class GenericArray<T> {
//   constructor(public data: T[]) {}
//   get(index: number): T {
//     return this.data[index];
//   }
// }

// const g = new GenericArray<string>(["e", "w", "a", "v", "g"]);
// console.log(g.get(3));

// const v = new GenericArray<number>([1, 3, 13, 75, 31]);
// console.log(v.get(3));

function printArrayNumber(data: number[]): void {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}

function printArrayString(data: string[]): void {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}

function printArrayAnything<T>(data: T[]): void {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}

printArrayAnything<string>(["s", "r", "s"]);
