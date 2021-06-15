import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

import logo from 'assets/check.svg';
import useStyles from 'styles/NavbarStyles';
import { Box, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { ThemeContext } from 'contexts/ThemeContext';
import DarkModeToggle from 'react-dark-mode-toggle';

const Navbar = ({ history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState(null);

  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.MobileMenu}
    >
      <MenuItem>
        <Button
          variant='contained'
          className={classes.RegisterBtn}
          onClick={() => history.push('/account')}
        >
          Login / Register
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={`${classes.root}`}>
      <AppBar position='fixed' className={classes.Appbar}>
        <Toolbar>
          <Typography
            variant='h5'
            noWrap
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minWidth: 160,
              color: '#000',
            }}
            onClick={() => history.push('/')}
          >
            <img src={logo} style={{ width: 30, height: 30 }} />
            Taskit App
          </Typography>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
            }}
          >
            <DarkModeToggle
              onChange={toggleDarkMode}
              checked={isDarkMode}
              size={50}
              className={classes.darkBtn}
            />
          </div>
          <div className={classes.sectionDesktop}>
            <Box
              display='flex'
              justifyContent='space-around'
              alignItems='center'
              flexGrow='1'
            >
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexGrow: 1,
                  padding: '0px 20px',
                  flexBasis: '75%',
                }}
              ></Box>
              <Box
                style={{
                  display: 'flex',
                  flexGrow: 1,
                  justifyContent: 'space-around',
                  flexBasis: '25%',
                  maxWidth: 300,
                  minWidth: 200,
                }}
              >
                <Button
                  variant='contained'
                  className={classes.RegisterBtn}
                  onClick={() => history.push('/account')}
                >
                  Login / Register
                </Button>
              </Box>
            </Box>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              style={{
                marginLeft: 'auto',
                color: '#000',
              }}
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <Box paddingTop={'64px'}> </Box>
    </div>
  );
};
export default withRouter(Navbar);
