import { CartItemType } from '../types/CartItemType';

export const getTotalItems = (items: CartItemType[]) =>
  items.reduce((acc: number, item) => acc + item.amount, 0);

export const handleAddToCart = (clickedItem: CartItemType) => null;
export const handleRemoveFromCart = () => null;
