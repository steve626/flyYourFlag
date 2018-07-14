import React from 'react';
import {GoogleApiWrapper, Map, node} from 'google-maps-react';


export class Map extends React.Component {
  componentDidMount(prevProps, prevState){
    if (prevProps.google !== this.props.google){
    this.loadMap();
    }
}
  componentDidMount(){
    this.loadMap();
  }

  loadMap(){
    if (this.props && this.props.google){
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom } = this.props;
      const { lat, lng } = initialCenter;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center:center,
        zoom:zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }
  render() {
    return (
      <div ref='map'>
        Loading map... 
        </div>
    )
  }
}

Map.propTypes = {
  google:React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object
}

Map.defaultProps = {
  zoom: 16,
  initialCenter: {
    lat: 33.356,
    lng: -111.79
  }
}