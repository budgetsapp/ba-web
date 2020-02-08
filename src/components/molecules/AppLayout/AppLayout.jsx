import React from 'react';
import { Container, Image, Menu, Dropdown } from 'semantic-ui-react';
import { PropTypes } from 'prop-types';

import { MenuItems } from './menu-items';
import './AppLayout.css';

AppLayout.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  getIsActive: PropTypes.func,
  userData: PropTypes.shape({
    displayName: PropTypes.string
  }).isRequired
};

AppLayout.defaultProps = {
  getIsActive: () => undefined
};

export function AppLayout({
  onMenuItemClick,
  children,
  getIsActive,
  userData
}) {
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
            <Image size='mini' src='' style={{ marginRight: '1.5em' }} />
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
          <Menu.Menu position='right'>
            <Dropdown item simple text={`Hello, ${userData.displayName}`}>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => onMenuItemClick(MenuItems.LOGOUT)}
                >
                  Log out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
      <div className='app-layout__content'>
        <div className='app-layout__content-inner'>{children}</div>
      </div>
    </div>
  );
}
