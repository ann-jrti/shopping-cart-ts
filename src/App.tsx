import { useState } from 'react';
import { useQuery } from 'react-query';
import { Drawer, LinearProgress, Badge, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartItemType } from './types/types';
import { getProducts } from './api-requests/getProducts/getProducts';
import { Wrapper } from './App.styles';
import { handleAddToCart } from './cart-actions';
import { CartItem } from './components/Item/CartItem';

const App = () => {
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

export default App;
