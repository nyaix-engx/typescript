import { User } from "./models/Users";

const user = new User({ name: "Sanjay", age: 20 });

user.on("change", () => {
  console.log("Changed");
});
