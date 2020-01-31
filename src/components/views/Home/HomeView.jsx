import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import { MenuItems } from './menu-items';
import './Home.css';

HomeView.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  getIsActive: PropTypes.func
};

HomeView.defaultProps = {
  getIsActive: () => undefined
};

export function HomeView({ onMenuItemClick, children, getIsActive }) {
  return (
    <div className='home-view__container'>
      <Menu inverted className='home-view__menu'>
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
      <div className='home-view__content'>
        <div className='home-view__content-inner'>{children}</div>
      </div>
    </div>
  );
}
