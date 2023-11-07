declare namespace IUser {
  interface IUserResponse {
    id: number;
    name: string;
    username: string;
    password: string;
    roles: Role[];
  }

  interface Role {
    id: number;
    name: string;
  }
}
