import { Wrapper } from '../App.styles';
import { Grid, LinearProgress } from '@mui/material';
import { CartItem } from '../CartItem/CartItem';
import { useQuery } from 'react-query';
import { getProducts } from '../api-requests/getProducts/getProducts';
import { CartItemType } from '../types/types';
import { handleAddToCart } from '../cart-actions';

export const ItemGrid = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <CartItem item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
