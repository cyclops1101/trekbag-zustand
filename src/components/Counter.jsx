import React from "react";
import { useItemsStore } from "../stores/itemsStore";

const Counter = () => {
  const { items } = useItemsStore((state) => state);
  return (
    <p>
      {items.filter((item) => item.packed).length}/{items.length} items packed
    </p>
  );
};

export default Counter;
