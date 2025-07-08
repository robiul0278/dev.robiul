import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev-robiul-server.vercel.app/api/v1' }),
  tagTypes: ["project"],
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (data) => {
        return {
          url: `/project/create`,
          method: "POST",
          body: data
        }
      },
       invalidatesTags: ["project"]
    }),
    getAllProject: builder.query({
      query: () => {
        return {
          url: `/project`,
          method: "GET",
        }
      },
    }),
  }),
});


export const { useGetAllProjectQuery, useCreateProjectMutation } = baseApi;