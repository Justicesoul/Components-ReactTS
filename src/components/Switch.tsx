import { useState } from 'react';

const Switch = () => {
  const [toDisabled, setToDisabled] = useState(false);

  return (
    <div className="margin-bottom">
      <label className="switch">
        <input
          type="checkbox"
          onChange={(e) => {
            setToDisabled(e.target.checked);
          }}
        />
        <span className="slider round"></span>
      </label>
      {toDisabled && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      )}
    </div>
  );
};

export default Switch;
