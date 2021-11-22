import { useState } from 'react';

const vegetables = [
  'Vegetables 🥗',
  'Carrot 🥕',
  'Broccoli 🥦',
  'Eggplant 🍆',
  'Potato 🥔',
];
const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Vegetables 🥗');

  const dropdownToggle = () => {
    setOpen(!open);
  };

  const dropdownSelect = (item: string) => {
    dropdownToggle();
    setSelectedItem(item);
  };

  return (
    <div className="margin-bottom">
      <div className="dropdown" onClick={dropdownToggle}>
        <div className="dropdown__name">{selectedItem}</div>
        <span className="dropdown__state">{open ? '⇧' : '⇩'}</span>
      </div>
      {open &&
        vegetables.map((item) => (
          <div
            className="dropdown"
            key={item}
            onClick={() => dropdownSelect(item)}
          >
            {item}
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
