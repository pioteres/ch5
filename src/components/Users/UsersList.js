import './styles.scss';

const UsersList = ({ users, handleSetUser, activeElem }) => {
  return (
    <div className="users-list">
      <ul>
        {users.map( (elem) => {
          return <li key={elem.id} className={elem.id === activeElem ? "active-user": ''} onClick={ (e) => handleSetUser(elem, e)}>{elem.name.firstname} {elem.name.lastname}</li>
        })}
      </ul>
    </div>
  );
};

export default UsersList;
