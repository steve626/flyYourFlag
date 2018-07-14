import React from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react';

export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    const style = {
      width: '100vw',
      height: '75vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBxQES5wS9zWkEtfsdjVPJXDxXXlH8FMzA"
})(MapContainer);