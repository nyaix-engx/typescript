import { AxiosPromise, AxiosResponse } from "axios";
import { hasId } from "./ApiSync";

interface ModelAttributes<T extends hasId> {
  getAll(): T;
  set(value: T): void;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model<T extends hasId> {
  constructor(
    private events: Events,
    private sync: Sync<T>,
    private attributes: ModelAttributes<T>
  ) {}
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.trigger("change");
  }

  fetch(): void {
    const id = this.attributes.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.events.trigger("save");
      })
      .catch((error: AxiosResponse): void => {
        // this.events.trigger("Error");
      });
  }
}
