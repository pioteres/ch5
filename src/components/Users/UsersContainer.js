import React, { useEffect, useState, useRef } from 'react';
import { UsersList, User, UserSearch } from '.';
import { Switch, Route, NavLink } from 'react-router-dom';

import './styles.scss';

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const [usersFromApi, setUsersFromApi] = useState();
  const [user, setUser] = useState();
  const [activeElem, setActiveElem] = useState();
  const ref = useRef();

  const getData = () => {
    fetch('./users.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsersFromApi(data);
        setUsers(data);
      })
      .catch((err) => {});
  };

  const handleSetUser = (selectedUser, e) => {
    setActiveElem(selectedUser.id);
    setUser(selectedUser);
  };

  const filterData = (e) => {
    const searchValue = e.target.value.toLowerCase();
    let filteredUsers = usersFromApi;
    if (searchValue) {
      filteredUsers = filteredUsers.filter((elem) => {
        if (
          elem.name.firstname.toLowerCase().includes(searchValue) ||
          elem.name.lastname.toLowerCase().includes(searchValue)
        )
          return elem;
        else return null;
      });
    }
    setUsers(filteredUsers);
  };
  const handleEnterDown = (e) => {
    if (e.key === 'Enter') {
      filterData(e);
    }
  };

  const handleClick = () => {
    setUsers(usersFromApi);
    ref.current.value = null;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <ul style={{ padding: '0 10px' }}>
        <li>
          <NavLink to="/users">Users list</NavLink>
        </li>
        <li>
          <NavLink to="/user-profile">User profile</NavLink>
        </li>
      </ul>
      <UserSearch
            ref={ref}
            handleEnterDown={handleEnterDown}
            handleClick={handleClick}
          />
      <Switch>
        <Route path="/users">
          <UsersList
            users={users}
            handleSetUser={handleSetUser}
            activeElem={activeElem}
          />
        </Route>
        <Route path="/user-profile">
          {user ? (
            <User user={user} />
          ) : (
            <p>Please, select user from Users list</p>
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default UsersContainer;
