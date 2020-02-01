import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import { MenuItems } from './menu-items';
import './AppLayout.css';

AppLayout.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  getIsActive: PropTypes.func
};

AppLayout.defaultProps = {
  getIsActive: () => undefined
};

export function AppLayout({ onMenuItemClick, children, getIsActive }) {
  return (
    <div className='app-layout__container'>
      <Menu inverted className='app-layout__menu'>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='mini'
              src='/logo.png'
              style={{ marginRight: '1.5em' }}
            />
            Project Name
          </Menu.Item>
          <Menu.Item
            as='a'
            active={getIsActive(MenuItems.DASHBOARD)}
            onClick={() => onMenuItemClick(MenuItems.DASHBOARD)}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            as='a'
            active={getIsActive(MenuItems.CATEGORIES)}
            onClick={() => onMenuItemClick(MenuItems.CATEGORIES)}
          >
            Categories
          </Menu.Item>
        </Container>
      </Menu>
      <div className='app-layout__content'>
        <div className='app-layout__content-inner'>{children}</div>
      </div>
    </div>
  );
}
