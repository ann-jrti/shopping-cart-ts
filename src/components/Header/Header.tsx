import { StyledNav } from './Header.styles';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <StyledNav>
      <Typography variant="h3" color="white">
        Random shop
      </Typography>
    </StyledNav>
  );
};

export default Header;
