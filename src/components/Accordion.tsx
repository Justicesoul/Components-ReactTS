import { useState } from 'react';
import useSound from 'use-sound';

const Accordion = () => {
  const [open, setOpen] = useState(true);
  const [play] = useSound('./laugh.wav');

  const accordionToggle = () => {
    play();
    setOpen(!open);
  };

  return (
    <div className="margin-bottom">
      <label htmlFor="state">
        <div className="accordion__row" onClick={accordionToggle}>
          <div className="accordion__heading">Accordion Item #1</div>
          <span className="accordion__heading--state">{open ? '⇧' : '⇩'}</span>
        </div>
      </label>
      <input type="checkbox" id="state" hidden />
      {/* {open && ( */}
      <div className="accordion__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      {/* )} */}
    </div>
  );
};

export default Accordion;
