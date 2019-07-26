import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Search.css";
import { Input, Grid, List, Divider, Container } from "semantic-ui-react";
import { action } from "./store";
import _ from "lodash";
import * as at from "./actions";
import { connect } from "react-redux";

const Search = ({ loading, suggestions }) => {
  const [loadingCall, setLoading] = useState(false);

  const debouncedSearch = _.debounce(async search => {
    if (search) {
      setLoading(true);
      action(at.SEARCH_TRANSLATIONS, { search });
      setLoading(false);
    }
  }, 500);

  const changeVal = e => {
    debouncedSearch(e.target.value);
  };

  const translationSelect = e => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="search-box">
        <Input
          onChange={changeVal}
          loading={loadingCall || loading}
          type="text"
          iconPosition="left"
          placeholder="Type a word in English..."
        />
      </div>
      {suggestions && suggestions.length > 0 && (
        <div className="centered-context">
          <Divider />
          <Container>
            <Grid>
              <Grid.Column textAlign="center">
                <List>
                  {suggestions.map(s => (
                    <List.Item onClick={translationSelect} key={s}>
                      <List.Content>
                        <List.Header as="a">{s}</List.Header>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};

Search.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default connect(state => ({
  suggestions: state.translations.suggestions,
  loading: state.loading[at.SEARCH_TRANSLATIONS]
}))(Search);
