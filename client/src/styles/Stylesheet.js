const StyleSheet = {
  App: {
    minHeight: "100vh",
    position: "relative"
  },
  wrapper: {
    backgroundColor: "#fff",
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
    padding: 50,
    background: "white",
    border: 0,
    borderRadius: "9px"
  },
  chatWrapper: {
    padding: 0,
    width: "100%"
  },
  chatTitleWrapper: {
    backgroundColor: "transparent",
    boxShadow: "rgb(204, 204, 204) 1px 1px 19px 2px",
    padding: "20px 10px"
  },
  chatTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#4b4b4b",
    fontSize: 22,
    fontWeight: "bold",
    margin: 0,
    padding: 0,
    width: "100%"
  },
  username: {
    color: "#4b4b4b",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "right"
  },
  chatInputWrapper: {
    backgroundColor: "whitesmoke",
    width: "100%",
    position: "fixed",
    bottom: 0,
    fontSize: "16px",
    paddingLeft: "5px",
    transition: "all .5s ease"
  },
  chatInput: {
    border: 0,
    borderTopWidth: 1,
    borderRadius: 0,
    padding: 5,
    margin: 0,
    width: "100%",
    borderBottom: "1px solid #8171d6",
    boxShadow: "rgb(204, 204, 204) 1px 1px 19px 2px",
    background: "transparent",
    transition: "all .5s ease"
  },
  chatBody: {
    padding: "20px 2px 0px"
  }
};

export default StyleSheet;
