import axios, { AxiosPromise } from "axios";
import { userProps } from "./Users";

export interface hasId {
  id?: number;
}

export class ApiSync<T extends hasId> {
  constructor(public url: string) {}
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.url}/${id}`);
  }
  save(data: T): AxiosPromise {
    const id = data.id;
    if (id) {
      return axios.put(`${this.url}/${id}`, data);
    } else {
      return axios.post(this.url, data);
    }
  }
}
