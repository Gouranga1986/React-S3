import { React, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userList, setUserList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUserList(data);
      } catch {
      }
    }
    fetchUsers();
  }, []);

  const handleOnChange = (e) => {
    if (e.target.value) {
      const filteredValues = userList.filter((user) => {
        return user.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
      setFilteredList(filteredValues);
    } else {
      setFilteredList([]);
    }
  }

  return (
    <div className="App">
      <h1>
        Filter UserList
      </h1>
      <input type="text" onChange={handleOnChange} />
      <div>
        {
          userList.length && filteredList.length === 0 ?
            userList.map((user) =>
              <ul key={user.id}> {user.name} </ul>
            ) : filteredList.map((user) =>
              <ul key={user.id}> {user.name} </ul>
            )
        }
      </div>

    </div>
  );
}

export default App;
