import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zuai-backend-1.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "/posts",
    }),

    getSinglePost: builder.query({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetSinglePostQuery } = postsApi;
