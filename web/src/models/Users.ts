import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

export interface userProps {
  id?: number;
  name?: string;
  age?: number;
}

const url = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<userProps> = new Sync<userProps>(url);
  public attributes: Attributes<userProps>;

  constructor(attrs: userProps) {
    this.attributes = new Attributes<userProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }
}
