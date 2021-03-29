import { useEffect, useState } from 'react';
import { UsersList, User } from '.';
import { Switch, Route, NavLink } from 'react-router-dom';

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const [activeElem, setActiveElem] = useState();

  const getData = () => {
    fetch('./users.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSetUser = (selectedUser, e) => {
    setActiveElem(selectedUser.id);
    setUser(selectedUser);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul style={{ padding: '0 10px' }}>
        <li>
          <NavLink to="/users">Lista userów</NavLink>
        </li>
        <li>
          <NavLink to="/user-profile">User profile</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/users">
          <UsersList users={users} handleSetUser={handleSetUser} activeElem={activeElem} />
        </Route>
        <Route path="/user-profile">
          {user &&
          <User user={user} />}
        </Route>
      </Switch>
    </div>
  );
};

export default UsersContainer;
