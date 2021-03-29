import { Button } from '../Button';
import { NavLink } from 'react-router-dom';

const Menu = ({ state, handleClick }) => {
  return (
    <div className="menu">
      <div className="header">
        <Button handleClick={handleClick}>
          {state ? 'Hide Menu' : 'Show Menu'}
        </Button>
      </div>
      <ul style={{ textAlign: 'left' }}>
        <li>
          <NavLink to="/dialogbox" activeClassName="menu-active">DialogBox</NavLink>
        </li>
        <li>
          <NavLink to="/snackbar" activeClassName="menu-active">Snackbar</NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="menu-active">Users</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
