import CartItem from '../CartItem/CartItem';
import { WrapperCart } from './Cart.styles';
import { CartItemType } from '../../types/CartItemType';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotalPrice = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  return (
    <WrapperCart>
      <h2>Shopping cart</h2>
      {cartItems.length === 0 ? <p>No items in your cart!</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotalPrice(cartItems).toFixed(2)}</h2>
    </WrapperCart>
  );
};

export default Cart;
