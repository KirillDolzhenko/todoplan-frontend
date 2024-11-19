import { IMLogin, IMSignUp } from "@/types/redux/query.types";
import { IUser } from "@/types/slices.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<IUser, IMLogin>({
      query: (data) => ({
        url: `/login`,
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),
    signUp: builder.mutation<IUser, IMSignUp>({
      query: (data) => ({
        url: `/signup`,
        method: "POST",
        body: {
          ...data,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authAPI;
