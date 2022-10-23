import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiHeaders = {
	'Access-Control-Allow-Origin': '*',
};

const baseUrl = process.env.REACT_APP_BASE_URL;

const createRequest = url => ({ url, headers: apiHeaders });

export const hotelApi = createApi({
	reducerPath: 'hotelApi',
	baseQuery: fetchBaseQuery({ baseUrl, mode: 'no-cors' }),
	endpoints: builder => ({
		getRooms: builder.query({
			query: () => createRequest(`rooms`),
		}),
		getRoom: builder.query({
			query: id => createRequest(`rooms/${id}`),
		}),
		getHero: builder.query({
			query: id => createRequest(`hero`),
		}),
	}),
});

export const { useGetRoomsQuery } = hotelApi;
