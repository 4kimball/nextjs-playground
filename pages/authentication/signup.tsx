import { useState } from "react";
import type { NextPage } from "next";

import { signup } from "../../apis/authentication";

const Signup: NextPage = () => {
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const credentials = {
      username,
      password,
      passwordConfirmation,
      sns_id: "snsId",
      sns_type: "instagram",
    };
    signup(credentials);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit">signup</button>
      </form>
    </div>
  );
};

export default Signup;
