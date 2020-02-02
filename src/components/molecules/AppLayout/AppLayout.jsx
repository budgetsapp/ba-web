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
  const menuItems = [
    {
      id: MenuItems.DASHBOARD,
      title: 'Dashboard'
    },
    {
      id: MenuItems.CATEGORIES,
      title: 'Categories'
    },
    {
      id: MenuItems.EXPENSES,
      title: 'Expenses'
    }
  ];
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
          {menuItems.map(item => {
            return (
              <Menu.Item
                key={item.id}
                as='a'
                active={getIsActive(item.id)}
                onClick={() => onMenuItemClick(item.id)}
              >
                {item.title}
              </Menu.Item>
            );
          })}
        </Container>
      </Menu>
      <div className='app-layout__content'>
        <div className='app-layout__content-inner'>{children}</div>
      </div>
    </div>
  );
}
