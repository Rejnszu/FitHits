import { useState } from "react";

const useInput = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [calories, setCalories] = useState("");

  function itemNameHandler(value) {
    setItemName(value);
  }
  function caloriesHandler(value) {
    setCalories(value);
  }
  function addItem(itemName, calories) {
    setItems((prevItems) => {
      return [...prevItems, { name: itemName, calories: calories }];
    });
  }

  return {
    items: items,
    itemName: itemName,
    calories: calories,
    itemNameHandler: itemNameHandler,
    caloriesHandler: caloriesHandler,
    addItem: addItem,
  };
};

export default useInput;
