import { User } from "../entities/User"

interface CreateUserRequest {
  name: string,
  email: string
}
type CreateUserResponse = User
export class CreateUser {
  async execute({ email, name }: CreateUserRequest): Promise<CreateUserResponse> {
    const user = new User({
      email, name
    })
    return user
  }
}
