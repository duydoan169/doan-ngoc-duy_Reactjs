/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [newName, setNewName] = useState("");
  const [editId, setEditId] = useState<number>(-1);

  // get users
  async function getData() {
    const res = await axios.get("http://localhost:8080/users");
    setUsers(res.data);
  }

  // add user
  async function addUser() {
    const res = await axios.post("http://localhost:8080/users", {
      name: newName,
    });

    setUsers([...users, res.data]);
    setNewName("");
  }

  // delete user
  async function deleteUser(id: number) {
    await axios.delete(`http://localhost:8080/users/${id}`);
    getData();
  }

  // update user
  async function updateUser() {
    if (editId === -1) return;

    const res = await axios.put(`http://localhost:8080/users/${editId}`, {
      name: newName,
    });

    // update local state
    setUsers(users.map(user => user.id === editId ? res.data : user));

    // reset
    setEditId(-1);
    setNewName("");
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Học API</h2>

      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="Enter user name"
      />
      {editId === null ? (
        <button onClick={addUser}>Them</button>
      ) : (
        <button onClick={updateUser}>Sua</button>
      )}

      <ul>
        {users.map((item: any) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => deleteUser(item.id)}>Xoa</button>{" "}
            <button onClick={() => {
              setEditId(item.id);
              setNewName(item.name);
            }}>Sua</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
