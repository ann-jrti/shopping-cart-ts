import CartItem from '../CartItem/CartItem';
import { WrapperCart } from './Cart.styles';
import { CartItemType } from '../../types/CartItemType';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
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
    </WrapperCart>
  );
};

export default Cart;
