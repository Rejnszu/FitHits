import { useState } from "react";

const useInput = () => {
  const [items, setItems] = useState([]);

  function addItem(itemName, calories) {
    setItems((prevItems) => {
      return [
        ...prevItems,
        { name: itemName, calories: calories, id: items.length },
      ];
    });
  }
  function removeItem(clickedId) {
    setItems((prevState) => {
      return [...prevState.filter((item) => item.id !== clickedId)];
    });
  }

  return {
    items: items,
    addItem: addItem,
    removeItem: removeItem,
  };
};

export default useInput;
