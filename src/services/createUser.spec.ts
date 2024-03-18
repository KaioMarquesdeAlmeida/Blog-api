import { describe, expect, it } from "vitest";
import { CreateUser } from "./createUser";
import { User } from "../entities/User";

describe("Create user", () => {
  it('should be able to create user', () =>{
    const createUser = new CreateUser()
    expect(createUser.execute({ name: "Kaio", email: "kaio"})).resolves.toBeInstanceOf(User)
  })
})