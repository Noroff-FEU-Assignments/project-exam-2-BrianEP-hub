import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiHeaders = {
	'Access-Control-Allow-Origin': '*',
};

const baseUrl = process.env.REACT_BASE_URL;

const createRequest = url => ({ url, headers: apiHeaders });

export const hotelApi = createApi({
	reducerPath: 'hotelApi',
	baseQuery: fetchBaseQuery({ baseUrl, mode: 'no-cors' }),
	endpoints: builder => ({
		getRooms: builder.query({
			query: () => createRequest(`rooms`),
		}),
	}),
});

export const { useGetRoomsQuery } = hotelApi;
