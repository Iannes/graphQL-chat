const StyleSheet = {
  App: {
    minHeight: "100vh",
    position: "relative"
  },
  wrapper: {
    backgroundColor: "#eee",
    margin: "0 auto",
    padding: "0 20",
    width: "100%",
    maxWidth: "960px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  signupWrapper: {
    padding: 50
  },
  chatWrapper: {
    padding: 0,
    width: "100%"
  },
  chatTitleWrapper: {
    backgroundColor: "#6fb0dc",
    borderBottom: "1px solid #5887a7",
    padding: "20px 10px"
  },
  chatTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    margin: 0,
    padding: 0,
    width: "100%"
  },
  username: {
    color: "#eee",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "right"
  },
  chatInputWrapper: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    position: "relative",
    bottom: 0
  },
  chatInput: {
    border: 0,
    borderTopWidth: 1,
    borderRadius: 0,
    padding: 5,
    margin: 0
  },
  chatBody: {
    padding: "20px 20px 0 20px"
  }
};

export default StyleSheet;
