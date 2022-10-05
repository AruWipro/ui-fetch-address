import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

function AppHeader() {
  return (
      <Segment inverted padded = 'small' piled raised  size marge >
        <Header as= 'h1'>
          Finder  <Icon name = 'search orange' size = 'large'/>
        </Header>
        
      </Segment>
    
  )
}

export default AppHeader