import { gql } from 'apollo-boost';

export const addMovieMutation = gql`
  mutation addMovie($name: String!, $genre: String!, $directorId: ID) {
    addMovie(name: $name, genre: $genre, directorId: $directorId) {
      name
      genre
    }
  }
`;
export const deleteMovieMutation = gql`
mutation deleteMovie($id: ID) {
    deleteMovie(id: $id) {
      id
    }
  }
`;

