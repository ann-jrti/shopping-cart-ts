import React, { useState } from 'react';
import { Wrapper, StyledButton } from '../../App.styles';
import { Grid, LinearProgress, Drawer, Box, Badge } from '@mui/material';
import { Item } from '../Item/Item';
import { useQuery } from 'react-query';
import { getProducts } from '../../api-requests/getProducts/getProducts';
import { CartItemType } from '../../types/CartItemType';
import { getTotalItems } from '../../cart-actions';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from '../Cart/Cart';

export const ItemGrid = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      //is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // first time item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

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
      <Box display="flex" justifyContent="flex-end">
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
            <AddShoppingCartIcon />
          </Badge>
        </StyledButton>
      </Box>

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
