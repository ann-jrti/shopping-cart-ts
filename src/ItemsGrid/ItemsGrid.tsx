import React, { useState } from 'react';
import { Wrapper } from '../App.styles';
import { Grid, LinearProgress, Drawer, Badge } from '@mui/material';
import { CartItem } from '../CartItem/CartItem';
import { useQuery } from 'react-query';
import { getProducts } from '../api-requests/getProducts/getProducts';
import { CartItemType } from '../types/CartItemType';
import { getTotalItems, handleAddToCart } from '../cart-actions';
import { StyledButton } from '../App.styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const ItemGrid = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;

  return (
    <Wrapper>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

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
