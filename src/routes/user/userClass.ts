import { CustomError } from "../../utils/CustomError"

export class User{
  getName(){
    return new Promise((resolve, reject) => {
      reject(new CustomError("TESTE", 500))
    })
  }
}