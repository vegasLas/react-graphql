import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

export const moviesQuery = gql`
  query moviesQuery {
    movies {
      id
      name
      genre
    }
  }
`;


export default graphql(moviesQuery)