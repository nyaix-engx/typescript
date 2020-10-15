import { UserForm } from "./views/UserForm";
import { User } from "./models/Users";

const user = User.buildUser({ name: "Sanjay", age: 20 });

const userForm = new UserForm(document.getElementById("root"), user);

userForm.render();
