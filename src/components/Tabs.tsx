import { useState } from 'react';

const tabs = [
  {
    button: 'Home',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo',
  },
  {
    button: 'Profile',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo',
  },
  {
    button: 'Contact',
    text: 'Lorem ipsum',
  },
];
const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const clickHandlerShow = (i: number) => {
    setActiveIndex(i);
  };

  return (
    <div className="margin-bottom">
      {tabs.map((tab, index) => (
        <button
          className="button"
          key={index}
          onClick={() => clickHandlerShow(index)}
        >
          {tab.button}
        </button>
      ))}
      {tabs.map(
        (tab, index) => activeIndex === index && <p className="p">{tab.text}</p>
      )}
    </div>
  );
};

export default Tabs;
