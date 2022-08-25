declare namespace IAuth {
  interface IAuthResponse {
    // access_token: string;
    // refresh_token: string;
    refreshToken: string;
    id: number;
    username: string;
    email: string;
    roles: string[];
    accessToken: string;
    tokenType: string;
    jwt: string;
  }
  interface IAuthBody {
    // username: string;
    phone: string;
    password: string;
  }
}
