import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import link from "./WebSocket";

export default new ApolloClient({
  link,
  cache: new InMemoryCache()
});
