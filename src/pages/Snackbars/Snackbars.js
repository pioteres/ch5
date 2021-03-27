import { useState } from 'react';
import { Button } from '../../components/Button';
import { Snackbar } from '../../components/Snackbar';
const Snackbars = (children) => {
  const [isSnackbarActive, setSnackbarActive] = useState(false);
  const handleClick = () => setSnackbarActive(true);
  return (
    <div>
      <Button handleClick={handleClick}>Show snackbar</Button>
      {isSnackbarActive && (
        <Snackbar {...children}  setActive={setSnackbarActive} />
      )}
    </div>
  );
};

export default Snackbars;
