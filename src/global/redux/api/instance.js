import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: (headers) => {
      //   const token = Cookies.get("token");
      //   if (token) {
      //     headers.set("Authorization", `${token}`);
      //   }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
