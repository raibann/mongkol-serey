declare namespace IAuth {
  interface ILoginResponse {
    user: User;
    token: IToken;
  }

  interface IToken {
    access_token: string;
    refresh_token: string;
  }

  interface User {
    id: number;
    name: string;
    username: string;
    roles: Role[];
  }

  interface Role {
    id: number;
    name: string;
  }
  interface IAuthBody {
    username: string;
    password: string;
  }
}
