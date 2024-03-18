import { expect, test } from "vitest"
import { User } from "./userClass"
import { CustomError } from "../../utils/CustomError"
test('create an test', async () =>{
  const user = new User()
  expect(user.getName()).rejects.toBeInstanceOf(CustomError)
})