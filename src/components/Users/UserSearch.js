import React from 'react';


const UserSearch = React.forwardRef(({ handleEnterDown, handleClick }, ref) => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={ref}
          placeholder="search..."
          type="text"
          name="search"
          onKeyDown={handleEnterDown}
        ></input>
        <button type="reset" onClick={handleClick} >X</button>
      </form>

    </div>
  );
});

export default UserSearch;
