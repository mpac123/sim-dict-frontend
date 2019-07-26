import React from "react";
import "./App.css";
import {
  Container,
  Divider,
  Header,
  Icon,
  Menu,
  Loader,
  Dimmer,
  Segment
} from "semantic-ui-react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import data from "./resources/custom.geo.json";
import Search from "./Search";
import { action } from "./store";
import * as at from "./actions";
import { connect } from "react-redux";

function App({ loading, translations }) {
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

  const selectTranslation = e => {
    action(at.GET_TRANSLATIONS, e);
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
      <Search onSelect={selectTranslation} />
      <Divider hidden />
      {loading && (
        <Segment basic>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )}
      {!loading && translations.length > 0 && (
        <ul>
          {translations.map(t => (
            <li style={{ color: "white" }}>
              {t.language_name} -> {t.translation}
            </li>
          ))}
        </ul>
      )}
      <Map center={position} zoom={4} style={{ height: "640px" }}>
        <TileLayer url="" />
        <GeoJSON data={data} color="#fff" />
        <GeoJSON data={france} color="lime" />
      </Map>
    </Container>
  );
}

export default connect(state => ({
  loading: state.loading[at.GET_TRANSLATIONS],
  translations: state.translations.translations
}))(App);
