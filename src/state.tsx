import { atom } from "jotai";
import { UserAccounts } from "./config";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  [key: string]: any;
};

export const currentUserIdAtom = atom(UserAccounts[0].id);

export const cartAtom = atom<CartItem[]>([]);

export const showCheckoutPopupAtom = atom(false);