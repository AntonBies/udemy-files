import { useState } from "react";

import styles from "./AddUser.module.css";

import Button from "../Button/Button";
import Card from "../Card/Card";
import ErrorModal from "../ErrorModal/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const handleUsernameChange = ({ target }) => {
    setUsername(target.value);
  };
  const handleAgeChange = ({ target }) => {
    setAge(target.value);
  };

  const handleErrorModalButtonClick = () => {
    setError(undefined);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0 || +age < 1) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid name and age (non-empty vales, age > 0).",
      });
      return;
    }
    const id = `${new Date().getTime().toString()}.${Math.random()
      .toString(36)
      .substring(2)}`;
    props.handleAdd({
      name: username,
      age: age,
      id: id,
    });
    setUsername("");
    setAge("");
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          handleClick={handleErrorModalButtonClick}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={handleUsernameChange}
            value={username}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={handleAgeChange}
            value={age}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
