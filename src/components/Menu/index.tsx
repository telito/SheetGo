import React from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MenuButton from '../MenuButton';
import SearchBar from '../SearchBar';

const drawerWidth = 350;
interface MenuProps {
  Page: any;
  window?: () => Window;
}

export const Menu: React.FC<MenuProps> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem>
          <ListItemButton>
            <SearchBar />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <MenuButton nameButton={'home'} />
          </ListItemButton>
        </ListItem>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Typography
            mb={3}
            variant={'h4'}
            style={{ color: '#0729C5', fontSize: '1rem', fontWeight: 'bold' }}
          >
            Categories
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-14px',
          }}
        >
          <Divider
            sx={{
              width: '80%',
              background: '#0729C5',
              fontSize: '2px',
              borderRightWidth: '2.2px',
              borderBottomWidth: '2.2px',
            }}
          />
        </Box>

        <ListItem>
          <ListItemButton>
            <MenuButton nameButton={'Finance'} />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ marginTop: '-16px' }}>
          <ListItemButton>
            <MenuButton nameButton={'Software Development'} />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ marginTop: '-16px' }}>
          <ListItemButton>
            <MenuButton nameButton={'Education'} />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ marginTop: '-16px' }}>
          <ListItemButton>
            <MenuButton nameButton={'Sales'} />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ marginTop: '-16px' }}>
          <ListItemButton>
            <MenuButton nameButton={'Local Bussines'} />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ marginTop: '-16px' }}>
          <ListItemButton>
            <MenuButton nameButton={'Creative'} />
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ marginTop: '-16px' }}>
          <ListItemButton>
            <MenuButton nameButton={'Content Production'} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          display: { md: 'none' },
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SheetGo Template Project
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Toolbar />
        <props.Page />
      </Box>
    </Box>
  );
};
