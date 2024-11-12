export interface IParamsAuthContent {
  active: "true" | "false";
}

export interface IParams<T> {
  searchParams: T;
}

export type IParamsAuth = IParams<IParamsAuthContent>;
