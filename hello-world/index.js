const react = Spicetify.React;
const reactDOM = Spicetify.ReactDOM;
const {
  URI,
  React: { useState, useEffect, useCallback },
  Platform: { History },
} = Spicetify;

// The main custom app render function. The component returned is what is rendered in Spotify.
function render() {
  return react.createElement(Grid, { title: "Hello World" });
}

// Our main component
class Grid extends react.Component {
  constructor(props) {
    super(props);
    Object.assign(this, props);
  }

  render() {
    return react.createElement("h1", {}, this.props.title);
  }
}
