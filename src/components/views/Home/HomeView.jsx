import React from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import { HomeRouter } from './HomeRouter';
import { PropTypes } from 'prop-types';

HomeView.propTypes = {
  onMenuItemClick: PropTypes.func.isRequired
};

HomeView.defaultProps = {};

export function HomeView({ onMenuItemClick }) {
  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='mini'
              src='/logo.png'
              style={{ marginRight: '1.5em' }}
            />
            Project Name
          </Menu.Item>
          <Menu.Item as='a' onClick={() => onMenuItemClick('dashboard')}>
            Dashboard
          </Menu.Item>
          <Menu.Item as='a' onClick={() => onMenuItemClick('categories')}>
            Categories
          </Menu.Item>
        </Container>
      </Menu>
      <div className='home-view__content'>
        <HomeRouter />
      </div>
    </div>
  );
}
