import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

export const client = new ApolloClient({
  uri:
    `${process.env.REACT_APP_URL}/graphql` ||
    "http://192.168.1.64:1337/graphql",
  cache: new InMemoryCache()
});

export const GET_IMAGES = gql`
  query {
    portfolios {
      id
      image {
        formats
      }
    }
  }
`;

export const GET_FILES = gql`
  query {
    files {
      id
      formats
    }
  }
`;
