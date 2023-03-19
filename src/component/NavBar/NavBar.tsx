import * as React from 'react';
import {AppBar,Box, Toolbar, IconButton, Typography} from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

function ResponsiveAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} data-testid="wrapper-box">
    <AppBar position="static" data-testid="app-bar">
      <Toolbar data-testid="tool-bar">
        <IconButton
          size="large"
          data-testid="icon-btn"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <LocalGroceryStoreIcon data-testid="local-grocery-store-icon" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Grocery App
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default ResponsiveAppBar;