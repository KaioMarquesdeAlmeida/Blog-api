import { expect, test } from "vitest";
import { User } from "../entities/User";

test('Create a user', () =>{
  const user = new User({email: "kaio@gmail.com", name: "Kaio Marques"})
  expect(user).toBeInstanceOf(User)
})