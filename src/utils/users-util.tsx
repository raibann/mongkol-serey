export interface IUser {
  id: number;
  username: string;
  password: string;
  role: string;
  status: number;
}
export const UserData: IUser[] = [
  {
    id: 1,
    username: 'Ma Raibann',
    password: '1234',
    role: 'Admin',
    status: 1,
  },
  {
    id: 2,
    username: 'Meas Saominea',
    password: '1234',
    role: 'Admin',
    status: 0,
  },
  {
    id: 3,
    username: 'Rem Brosna',
    password: '1234',
    role: 'Admin',
    status: 0,
  },
];

export const role = ['Admin', 'Manager', 'Staff'];
