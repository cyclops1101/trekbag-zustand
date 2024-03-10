import React from "react";
import { BatchButtonGroup, AddItemForm } from ".";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <AddItemForm />
      <BatchButtonGroup />
    </div>
  );
};

export default Sidebar;
