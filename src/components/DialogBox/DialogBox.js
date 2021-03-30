import React from 'react';
import './styles.scss';

const DialogBox = ({ title, handleClose, children }) => {
  return (
    <div className="overlay">
      <div className="dialogbox">
        <div className="header">
          <div className="closeBtn" onClick={handleClose}>
            X
          </div>
          <h3>{title}</h3>
        </div>
        <div className="content">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English
        </div>
        <div className="footer">{children}</div>
      </div>
    </div>
  );
};

export default DialogBox;
