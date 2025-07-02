import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: `/auth/register`,
          method: "POST",
          body: data
        }
      },
       invalidatesTags: ["auth"]
    }),
    loginUser: builder.mutation({
      query: (data) => {
        // console.log(data);
        return {
          url: `/auth/login`,
          method: "POST",
          body: data
        }
      },
       invalidatesTags: ["auth"]
    }),
  }),
});


export const { useLoginUserMutation, useRegisterUserMutation } = baseApi;