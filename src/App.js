import { useState } from 'react';
import { Button } from './components/Button';
import { DialogBox } from './components/DialogBox';
import './App.css';

const title = 'Sample title';

function App() {
  const [isDialogBoxShowing, setDialogBoxState] = useState(false);
  const handleClick = () => {
    setDialogBoxState(true);
  };
  const handleClose = () => {
    setDialogBoxState(false);
  };
  const handleConfirm = () => {
    alert('Confirm clicked');
    setDialogBoxState(false);
  };
  const handleAbort = () => {
    console.log('Abort clicked');
    alert('Abort clicked');
  };
  return (
    <div className="App">
      <Button handleClick={handleClick}>Click Me!</Button>
      {isDialogBoxShowing && (
        <DialogBox title={title} handleClose={handleClose}>
          <Button handleClick={handleConfirm}>Confirm</Button>
          <Button handleClick={handleAbort}>Abort</Button>
        </DialogBox>
      )}
    </div>
  );
}

export default App;
