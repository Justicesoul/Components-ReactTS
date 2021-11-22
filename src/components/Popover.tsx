import { useState } from 'react';

const Popover = () => {
  const [visible, setVisible] = useState(false);

  const visibleElement = () => {
    setVisible(true);
  };

  const unVisibleElement = () => {
    setVisible(false);
  };

  return (
    <div className="margin-bottom popover">
      <button
        className="button inline"
        onMouseEnter={visibleElement}
        onMouseLeave={unVisibleElement}
      >
        Hover me
      </button>
      {visible && (
        <div className="popover">
          <div className="helper"></div>
          <div className="popover__item">Yes!</div>
        </div>
      )}
    </div>
  );
};

export default Popover;
