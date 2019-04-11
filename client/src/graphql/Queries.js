import gql from "graphql-tag";

const CHATS_QUERY = gql`
  query chatsQuery {
    chats {
      id
      content
      from
      createdAt
    }
  }
`;

export default CHATS_QUERY;
