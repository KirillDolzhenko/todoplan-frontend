export interface IUser {
  id: string;
  username: string;
  email: string;
}

export interface IUserSlice {
  user?: IUser;
}
