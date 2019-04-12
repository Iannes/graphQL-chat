import composeId from "./helpers";
const CHAT_CHANNEL = "CHAT_CHANNEL";
const mock = {
  id: 1,
  from: "tester",
  content: "Testing",
  createdAt: new Date().toISOString()
};
let chats = [...mock];

export default {
  Query: {
    chats: (root, args, context) => chats
  },

  Mutation: {
    createChat: (root, { content, from }, { pubsub }) => {
      const id = composeId();
      const chat = {
        id,
        content,
        from,
        createdAt: new Date().toISOString()
      };

      chats = [...chats, chat];
      chats = chats.splice(0, 8);
      pubsub.publish(CHAT_CHANNEL, { messageSent: chat });

      return chat;
    }
  },

  Subscription: {
    messageSent: {
      subscribe: (root, args, { pubsub }) => {
        return pubsub.asyncIterator(CHAT_CHANNEL);
      }
    }
  }
};
