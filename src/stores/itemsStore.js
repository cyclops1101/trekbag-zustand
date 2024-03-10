import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      initialize: () => {
        const items = localStorage.getItem("items");
        if (items) {
          set({ items: JSON.parse(items) });
        }
      },
      addItem: (name) => {
        set((state) => {
          return {
            items: [
              ...state.items,
              {
                id: Math.random(),
                name,
                packed: false,
              },
            ],
          };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          return {
            items: state.items.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  packed: !item.packed,
                };
              }
              return item;
            }),
          };
        });
      },
      removeItem: (id) => {
        set((state) => {
          return { items: state.items.filter((item) => item.id !== id) };
        });
      },
      markAllAsIncomplete: () => {
        console.log("markAllAsUnpacked");
        set((state) => {
          return {
            items: state.items.map((item) => {
              return {
                ...item,
                packed: false,
              };
            }),
          };
        });
      },
      markAllAsComplete: () => {
        set((state) => {
          return {
            items: state.items.map((item) => {
              return {
                ...item,
                packed: true,
              };
            }),
          };
        });
      },
      resetToInitial: () => {
        set({ items: initialItems });
      },
      removeAllItems: () => {
        set({ items: [] });
      },
    }),
    { name: "items" }
  )
);
