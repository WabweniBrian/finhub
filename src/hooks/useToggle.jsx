import { useState, useCallback } from "react";

function useToggle(list, initialValue = null, activePropertyName = "isActive") {
  const [items, setItems] = useState(
    list.map((item) => ({
      ...item,
      [activePropertyName]: item === initialValue,
    }))
  );

  const toggleActiveState = useCallback(
    (itemToActivate) => {
      setItems((prevItems) => {
        const newItems = [...prevItems];

        // Deactivate all items except for the selected one
        newItems.forEach(
          (item) => (item[activePropertyName] = item === itemToActivate)
        );

        return newItems;
      });
    },
    [activePropertyName]
  );

  const selectedItem = items.find((item) => item.isActive);

  return [items, toggleActiveState, selectedItem];
}

export default useToggle;
