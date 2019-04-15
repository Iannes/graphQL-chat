import React, { useState } from "react";

const style = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    width: "70%",
    margin: "auto"
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
    padding: 10,
    margin: 0,
    height: 40,
    borderBottom: "1px solid #0099a9",
    borderRadius: 0,
    width: "100%",
    boxShadow: "rgb(204, 204, 204) 1px 1px 19px 2px",
    fontFamily: "sans-serif",
    fontSize: "16px"
  },
  button: {
    backgroundColor: "#0099a9",
    border: "0",
    padding: 5,
    margin: "10px auto",
    height: 40,
    width: "100%",
    fontSize: "18px",
    fontFamily: "sans-serif"
  }
};

const Form = ({ signin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signin(username);
  };

  const submit = async e => {
    if (e.key === "Enter") {
      e.preventDefault();
      signin(username);
    }
  };

  return (
    <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
      <fieldset style={style.wrapper}>
        <section style={style.label}>
          <label>
            <h1>Create account</h1>
          </label>
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
        </section>
        <button
          style={style.button}
          className="btn btn-primary"
          type="submit"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default React.memo(Form);
