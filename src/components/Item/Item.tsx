import { Button } from '@mui/material';
import { CartItemType } from '../../types/CartItemType';
import { ItemWrapper } from './Item.style';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

export const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <ItemWrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button color="secondary" onClick={() => handleAddToCart(item)}>
      Add to cart
    </Button>
  </ItemWrapper>
);
