import { Button } from '../Button';

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
          <a href="/">Link 1</a>
        </li>
        <li>
          <a href="/">Link 2</a>
        </li>
        <li>
          <a href="/">Link 3</a>
        </li>
        <li>
          <a href="/">Link 4</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
