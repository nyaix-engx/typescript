import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { StringCollection } from "./StringCollection";
import { LinkedList } from "./LinkedList";

// const string = new StringCollection("hello");
// string.sorter();
// console.log(string.data);

// const numbersCollection = new NumbersCollection([-10, 0, 7, 2]);
// numbersCollection.sorter();
// console.log(numbersCollection.data);

const linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(-2);
linkedList.add(20);

linkedList.sorter();
linkedList.print();
