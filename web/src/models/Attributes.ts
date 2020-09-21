import { userProps } from "./Users";

export class Attributes<T> {
  constructor(private data: T) {}
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }
  set(prop: T): void {
    Object.assign(this.data, prop);
  }
}
