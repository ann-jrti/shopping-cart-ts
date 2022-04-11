import { Button } from '@mui/material';
import { CartItemType } from '../../types/CartItemType';
import { Item } from '../Item/Item';
import { WrapperCartItem } from './CartItem.styles';

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <WrapperCartItem>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          color="error"
          variant="outlined"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>amount: {item.amount}</p>

        <Button
          size="small"
          disableElevation
          variant="outlined"
          color="success"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </WrapperCartItem>
);

export default CartItem;
