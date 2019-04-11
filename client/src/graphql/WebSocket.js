import { HttpLink } from "apollo-link-http";
import { split } from "apollo-client-preset";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import settings, { GRAPHQL_URI } from "../config/settings";

const wsLink = new WebSocketLink(settings);
const httpLink = new HttpLink({ uri: `http://${GRAPHQL_URI}` });

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export default link;
