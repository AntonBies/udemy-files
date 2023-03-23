import { useState } from "react";

import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const handleAdd = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <>
      <AddUser handleAdd={handleAdd} />
      <UserList users={users} />
    </>
  );
}

export default App;
