import { useEffect } from 'react';
import './styles.scss';

const Snackbar = ({ time, setActive, children, position, type }) => {
  let top;
  let bottom;
  let left;
  let right;
  let background = '#4caf50';

  switch (type) {
    case 'error':
      background = '#f44336';
      break;
    case 'warning':
      background = '#ff9800';
      break;
    case 'information':
      background = '#2196f3';
      break;
    default:
  }

  switch (position) {
    case 'left-top':
      top = 0;
      left = 0;
      break;
    case 'center-top':
      top = 0;
      break;
    case 'right-top':
      top = 0;
      right = 0;
      break;
    case 'left-middle':
      left = 0;
      break;
    case 'right-middle':
      right = 0;
      break;
    case 'left-bottom':
      left = 0;
      bottom = 0;
      break;
    case 'center-bottom':
      bottom = 0;
      break;
    case 'right-bottom':
      bottom = 0;
      right = 0;
      break;
    default:
  }

  const styles = {
    background: background,
    left: left,
    right: right,
    top: top,
    bottom: bottom,
  };

  useEffect(() => {
    const timer = setTimeout(() => setActive(false), time);
    return () => clearTimeout(timer);
  }, [setActive, time]);

  return (
    <div className="snackbar" style={styles}>
      <p>{children}</p>
    </div>
  );
};

export default Snackbar;
