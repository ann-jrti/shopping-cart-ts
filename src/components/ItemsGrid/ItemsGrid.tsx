import React, { useState } from 'react';
import { Wrapper, StyledButton } from '../../App.styles';
import { Grid, LinearProgress, Drawer, Badge } from '@mui/material';
import { Item } from '../Item/Item';
import { useQuery } from 'react-query';
import { getProducts } from '../../api-requests/getProducts/getProducts';
import { CartItemType } from '../../types/CartItemType';
import {
  getTotalItems,
  handleAddToCart,
  handleRemoveFromCart,
} from '../../cart-actions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from '../Cart/Cart';

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
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
