import { Model } from "./Model";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";

export interface userProps {
  id?: number;
  name?: string;
  age?: number;
}

const url = "http://localhost:3000/users";

export class User extends Model<userProps> {
  static buildUser(attrs: userProps): User {
    return new User(
      new Eventing(),
      new ApiSync<userProps>(url),
      new Attributes<userProps>(attrs)
    );
  }
  static buildUserCollection(): Collection<User, userProps> {
    return new Collection<User, userProps>(
      url,
      (json: userProps): User => User.buildUser(json)
    );
  }
}
