import { User } from "./models/Users";

const user = new User({ name: "Sanjay", age: 25 });

user.set({ name: "Titiksha Gandhi", age: 25 });

user.on("change", () => {
  console.log("Change #1");
});
user.on("change", () => {
  console.log("Change #2");
});
user.on("click", () => {
  console.log("Click");
});

user.trigger("click");
