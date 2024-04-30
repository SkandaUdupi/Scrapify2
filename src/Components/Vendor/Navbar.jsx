import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const pages = [
  { name: 'My Pickups', route: '/vendor/pickup' },
  { name: 'My Profile', route: '/vendor/profile' }
];
const settings = ['Logout'];

function ResponsiveAppBar() {
  const location = useLocation();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#2C4E80" }}>
      <Toolbar>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
          Scrapify
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              sx={{ mx: 2, color: location.pathname === page.route ? '#BACD92' : 'inherit' }}
            >
              <Link to={page.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                {page.name}
              </Link>
            </Button>
          ))}
          {settings.map((setting) => (
            <Button key={setting} onClick={handleCloseUserMenu} sx={{ color: 'inherit' }}>
              <Typography>{setting}</Typography>
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton
            onClick={handleOpenUserMenu}
            aria-label="menu"
            color="inherit"
          >
            Menu
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            getContentAnchorEl={null}
            keepMounted
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseUserMenu} sx={{  color: location.pathname === page.route ? '#1679AB' : 'inherit' }}>
                <Link to={page.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography textAlign="center">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
