import { graphql } from 'react-apollo';
import { addMovieMutation, deleteMovieMutation } from './mutation';

import { moviesQuery } from '../queries';


export const withGraphqlAdd = graphql(addMovieMutation, {
    props: ({ mutate }) => ({
        addMovie: movie => mutate({
            variables: movie,
            refetchQueries: [{ query: moviesQuery }],
        }),
    }),
});
export const withGraphqlDelete = graphql(deleteMovieMutation, {
    props: ({ mutate }) => ({
        deleteMovie: id => mutate({
            variables: id,
            refetchQueries: [{ query: moviesQuery }],
        }),
    }),
});