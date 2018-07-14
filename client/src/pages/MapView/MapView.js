import React, { Component } from "react";
import { Map,  Marker, GoogleApiWrapper } from "google-maps-react";
// import { Col, Row, Container } from '../../components/Grid';
// import { FormBtn } from '../../components/Form';
import API from "../../utils/API"

export class MapView extends Component {
state = {
  users: '',
  teams: '',
  geography: [],
  team: 'Phoenix Suns'
};

  constructor(props) {
    super(props);
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
//match fans of team that OP selects on teamChooser page
  renderFans() {
    return users.team.map( coordinates =>
    <Marker 
    position={ { lat: coordinates.lat, lng: coordinates.lng } }
    />
   );
    }
  

   
  
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }
    return (
      <div
        style={{
          height: "80vh",
          width: "100vw"
        }}
      >
        <Map style={{height: "80vh",
          width: "100vw"
          }} 
        google={this.props.google}
        onClick = { this.onMapClick } 
        initialCenter = {{ lat: 33.356, lng: -111.79 }}
        zoom={16}>
           {this.renderFans()}
          
        </Map>
      
      
      {/* <Row>
            <Col size="sm-4">
              {this.state.users.length ? (
                <select class="mt-3" style={{width:'100%'}}>
                  {this.state.users.map(user => (
                    <option key ={ user._id} value={user._id}>
                      {user.team}
                    </option>
                  ))}
                </select>
              ) : (
                  <h3 class="mt-2" style={{color:'white', textAlign:"center"}}>Choose a league </h3>
                )}
              </Col>
            <Col size="sm-8" />
      </Row> */}
      </div>



    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBxQES5wS9zWkEtfsdjVPJXDxXXlH8FMzA"
})(MapView);
