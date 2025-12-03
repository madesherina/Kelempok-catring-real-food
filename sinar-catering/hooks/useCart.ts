import { TProduct } from "@/data/products";
import moment from "moment";
import { create } from "zustand";

export type CartItem = TProduct & { qty: number; addedAt: string };

type CartState = {
  carts: CartItem[];
  addProduct: (product: TProduct) => void;
  increaseQty: (id: string | number) => void;
  decreaseQty: (id: string | number) => void;
  pay: () => void;
};

export const useCart = create<CartState>((set, get) => ({
  carts: [],

  addProduct: (product) => {
    const carts = get().carts;

    const isProductExists = carts.find((item) => item.id === product.id);

    if (isProductExists) {
      const updated = carts.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );

      set({ carts: updated });
    } else {
      set({
        carts: [
          ...carts,
          { ...product, qty: 1, addedAt: moment().format("DD/MM/YYYY HH:mm") },
        ],
      });
    }
  },

  increaseQty: (id) => {
    const carts = get().carts;

    const updated = carts.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );

    set({ carts: updated });
  },

  decreaseQty: (id) => {
    const carts = get().carts;

    const updated = carts
      .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
      .filter((item) => item.qty > 0);

    set({ carts: updated });
  },

  pay: () => {
    set({ carts: [] });
  },
}));
