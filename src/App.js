import React from 'react';
import './App.css';
import { Container, Divider, Header, Icon, Button, Input } from 'semantic-ui-react';
import {Map, Marker, Popup} from 'react-leaflet'

function App() {
  const position = [51.505, -0.09]
  return (
    <Container>
    <Header as='h2' icon inverted textAlign='center'>
          <Icon name='grid globe' />
          Maptionary
        </Header>
    <Divider />
    <div className="search-box">
      <Input type='text' placeholder='Type word in English...' action>
      <input />
      <Button type='submit'>Search</Button>
      </Input>
    </div>
    <div className="map">
      <Map center={position} zoom={13}>
      <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
    </Container>
  );
}

export default App;
