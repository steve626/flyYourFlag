import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import ReactDOM from 'react-dom';

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation:{
        lat: lat,
        lng: lng
      }
    }


    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  componentDidMount(){
    this.loadMap();
  }
renderChildren(){
  const { children } = this.props;

  if (!children) return;

  return React.Children.map(children, c => {
    return React.cloneElement(c, {
      map: this.map,
      google:this.props.google,
      mapCenter: this.state.currentLocation
    });
  })
}

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom } = this.props;
      const { lat, lng } = initialCenter;
      const center = new maps.LatLng(lat, lng);

      // let zoom = 16;
      // let lat = 33.356;
      // let lng = -111.79;
      // const center = new maps.LatLng(lat, lng);

      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }
    

    return (
      <div
        ref='map'
        style={{
          height: "80vh",
          width: "100vw"
        }}
      >
      {this.renderChildren()}
        <Map style={{}} google={this.props.google} >
          <Marker   />
          {/* <Marker position={pos} /> */}
          
        </Map>
      </div>
    );
  }
}

export class Marker extends React.Component {
componentDidUpdate(prevProps) {
  if ((this.props.map !== prevProps.map) || 
    (this.props.position !== prevProps.position)) {

    }
}

renderMarker() {
  let {
    map, google, position, mapCenter 
  } = this.props;

  let pos = position || mapCenter;
  position = new google.maps.LatLng(pos.lat, pos.lng);

  const pref = {
    map: map,
    position: position
  };

  this.marker = new google.maps.Marker(pref);
}

  render() {
    return null;

  }
}

Marker.propTypes = {
  position: React.PropTypes.object,
  map: React.PropTypes.object
}

Map.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object
}

Map.defaultProps = {
  zoom: 13,
  initialCenter: {
      lat: 33.356,
      lng: -111.79
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBxQES5wS9zWkEtfsdjVPJXDxXXlH8FMzA"
})(MapContainer);
