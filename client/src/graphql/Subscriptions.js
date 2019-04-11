import gql from "graphql-tag";

const subscribeToNewChats = chatsQuery => {
  chatsQuery.subscribeToMore({
    document: gql`
      subscription MessageSentSubscription {
        messageSent {
          id
          content
          from
          createdAt
        }
      }
    `,
    updateQuery: (previousData, { subscriptionData }) => {
      return {
        chats: [
          subscriptionData.data.messageSent,
          ...previousData.chats
        ].splice(0, 8)
      };
    }
  });
};

export default subscribeToNewChats;
