export interface UserProps {
  name: string,
  email: string
}

export class User {
  private props: UserProps

  get name () {
    return this.props.name
  }
  get email () {
    return this.props.email
  }

  constructor(props: UserProps) {
    this.props = props
  }
}