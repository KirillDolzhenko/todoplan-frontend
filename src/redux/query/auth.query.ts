// import "../../app/assets/config";

import { IQueryLogin } from "@/types/query.types";
import { IUser } from "@/types/slices.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

console.log(`${process.env.SERVER_BASE_URL}/user`);
console.log(`${process.env.SERVER_BASE_URL}/user`);
console.log(`${process.env.SERVER_BASE_URL}/user`);
console.log(`${process.env.SERVER_BASE_URL}/user`);
console.log(`${process.env.SERVER_BASE_URL}/user`);
console.log(`${process.env.SERVER_BASE_URL}/user`);
console.log(`${process.env.SERVER_BASE_URL}/user`);

export const authAPI = createApi({
  reducerPath: "authAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<IUser, IQueryLogin>({
      query: (data) => ({
        url: `/login`,
        method: "GET",
        body: {
          ...data,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authAPI;
