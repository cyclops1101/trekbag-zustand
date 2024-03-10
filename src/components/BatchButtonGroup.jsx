import { Button } from ".";
import { useItemsStore } from "../stores/itemsStore";

const BatchButtonGroup = () => {
  const {
    markAllAsComplete,
    markAllAsIncomplete,
    resetToInitial,
    removeAllItems,
  } = useItemsStore((state) => state);
  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} btnType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsIncomplete} btnType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={resetToInitial} btnType="secondary">
        Reset to initial
      </Button>
      <Button onClick={removeAllItems} btnType="secondary">
        Remove all items
      </Button>
    </section>
  );
};

export default BatchButtonGroup;
