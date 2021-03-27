import { useState } from 'react';
import { ModalDialogBox, Snackbars } from './pages';
import { Button } from './components/Button';
import { Menu } from './components/Menu';
import './App.css';

function App() {
  const [isOpen, setOpen] = useState();
  const handleClick = () => setOpen(!isOpen);
  return (
    <div className="App">
      <div className="header">
        <Button handleClick={handleClick}>
          {isOpen ? 'Hide Menu' : 'Show Menu'}
        </Button>
      </div>
      {isOpen && <Menu state={isOpen} handleClick={handleClick} />}
      <ModalDialogBox />
      <Snackbars time={5000} type="information" position="right-bottom">
        Snackbar with some props
      </Snackbars>
    </div>
  );
}

export default App;
