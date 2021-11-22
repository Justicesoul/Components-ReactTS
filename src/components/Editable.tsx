import { useState } from 'react';

const Editable = () => {
  const [input, setInput] = useState<string>(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  );

  return (
    <>
      <textarea
        className="editable"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </>
  );
};

export default Editable;
