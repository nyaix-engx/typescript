import faker from "faker";
import { Mappable } from "./CustomMap";
export class Company implements Mappable {
  name: string;
  phrase: string;
  location: {
    lat: number;
    long: number;
  };
  color: string = "red";
  constructor() {
    this.name = faker.company.companyName();
    this.phrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `<div><h1>Company Name: ${this.name}</h1>
      <h3>CatchPhrase : ${this.phrase}</h3></div>
    `;
  }
}
