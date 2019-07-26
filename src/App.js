import React from "react";
import "./App.css";
import { Container, Divider, Header, Icon, Menu } from "semantic-ui-react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import data from "./resources/custom.geo.json";
import Search from "./Search";

function App() {
  console.log(data);
  const position = [51, 18];
  const france = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: data.features[13].geometry
      }
    ]
  };

  return (
    <Container>
      <Menu inverted pointing secondary>
        <Menu.Item>
          <Header inverted as="h2">
            <Icon name="globe" /> Maptionary
          </Header>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>About us</Menu.Item>
          <Menu.Item>Contribute</Menu.Item>
        </Menu.Menu>
      </Menu>

      <Divider />
      <Search />
      <Divider hidden />
      <Map center={position} zoom={4} style={{ height: "640px" }}>
        <TileLayer url="" />
        <GeoJSON data={data} color="#fff" />
        <GeoJSON data={france} color="lime" />
      </Map>
    </Container>
  );
}

export default App;
