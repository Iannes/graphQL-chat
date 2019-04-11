import React, { useState } from "react";

const style = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  },
  label: {
    fontSize: 16,
    fontWeight: "bolder",
    padding: 0,
    margin: "0 0 5px 0"
  },
  input: {
    backgroundColor: "transparent",
    border: "0",
    padding: 5,
    margin: 0,
    height: 40,
    borderBottom: "1px solid green",
    borderRadius: 0
  },
  button: {
    backgroundColor: "#FFFFFF",
    border: "0",
    padding: 5,
    margin: "0 0 0 5px",
    height: 40
  }
};

const Form = ({ signin }) => {
  const [username, setUsername] = useState("");

  const submit = async e => {
    if (e.key === "Enter") {
      signin(username);
    }
  };

  return (
    <fieldset style={style.wrapper}>
      <section style={style.label}>
        <label>Your username:</label>
      </section>

      <section>
        <input
          style={style.input}
          type="text"
          placeholder="Your Username"
          value={username}
          onKeyPress={submit}
          onChange={e => setUsername(e.target.value)}
        />
        {/* <button style={style.button} onClick={() => signin(username)}>
          enter
        </button> */}
      </section>
    </fieldset>
  );
};

export default React.memo(Form);
