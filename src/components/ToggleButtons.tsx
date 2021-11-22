import { useState } from 'react';

const tabs = [
  {
    button: 'https://cdn-icons-png.flaticon.com/128/1994/1994233.png',
    format: 'left',
  },
  {
    button: 'https://cdn-icons-png.flaticon.com/128/1994/1994232.png',
    format: 'center',
  },
  {
    button: 'https://cdn-icons-png.flaticon.com/128/1994/1994234.png',
    format: 'right',
  },
];
const ToggleButtons = () => {
  const [active, setActive] = useState('left');

  const clickHandler = (format: string) => {
    setActive(format);
  };

  return (
    <div className="margin-bottom">
      {tabs.map((tab) => (
        <button
          className="button text-align"
          key={tab.button}
          style={{
            backgroundImage: `url(${tab.button})`,
          }}
          onClick={() => clickHandler(tab.format)}
        ></button>
      ))}

      <p
        style={{
          //@ts-ignore
          textAlign: active,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};

export default ToggleButtons;
