import { useRef, useState } from "react";
import { Button } from ".";
import toast from "react-hot-toast";
import { useItemsStore } from "../stores/itemsStore";

const AddItemForm = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const addItem = useItemsStore((state) => state.addItem);

  const addToList = (e) => {
    e.preventDefault();
    if (name === "") {
      toast("Please enter a name", {
        type: "error",
      });
      inputRef.current.focus();
      return;
    }
    addItem(name);
    setName("");
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={addToList}>
      <h2>Add Item</h2>
      <input
        ref={inputRef}
        onChange={handleChange}
        type="text"
        placeholder="Name"
        value={name}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
