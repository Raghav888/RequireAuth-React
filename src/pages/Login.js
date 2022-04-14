import React from "react";

import { useAuth } from "../context/auth-context";

export default function Login() {
  const { login, toggleLogin } = useAuth();

  return (
    <>
      <button onClick={() => toggleLogin()}>
        {login ? "logout" : "login"}{" "}
      </button>
    </>
  );
}
