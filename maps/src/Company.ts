import faker from "faker";

export class Company {
  name: string;
  phrase: string;
  location: {
    lat: number;
    long: number;
  };
  constructor() {
    this.name = faker.company.companyName();
    this.phrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }
}
