import { useItemsStore } from "../stores/itemsStore";

const ItemList = () => {
  const { items } = useItemsStore((state) => state);
  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default ItemList;

const Item = ({ id, name, packed }) => {
  const { toggleItem, removeItem } = useItemsStore((state) => state);
  return (
    <li className="item">
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={packed}
          onChange={() => toggleItem(id)}
        />
        {name}
      </label>
      <button onClick={() => removeItem(id)}>❌</button>
    </li>
  );
};
