import { useState } from 'react';
import { Button } from '../../components/Button';
import { DialogBox } from '../../components/DialogBox';

const title = 'Sample title';

const ModalDialogBox = () => {
  const [isDialogBoxShowing, setDialogBoxState] = useState(false);
  const handleClick = () => {
    setDialogBoxState(true);
  };
  const handleClose = () => {
    setDialogBoxState(false);
  };
  const handleConfirm = () => {
    console.log('Confirm clicked');
    setDialogBoxState(false);
  };
  const handleAbort = () => {
    console.log('Abort clicked');
    setDialogBoxState(false);
  };
  return (
    <div>
      <Button handleClick={handleClick}>Show DialogBox</Button>
      {isDialogBoxShowing && (
        <DialogBox title={title} handleClose={handleClose}>
          <Button handleClick={handleConfirm}>Confirm</Button>
          <Button handleClick={handleAbort}>Abort</Button>
        </DialogBox>
      )}
    </div>
  );
};

export default ModalDialogBox;
