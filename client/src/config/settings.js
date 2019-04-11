export const GRAPHQL_URI = "localhost:4000";

const settings = {
  uri: `ws://${GRAPHQL_URI}`,
  options: {
    reconnect: true
  }
};

export default settings;
