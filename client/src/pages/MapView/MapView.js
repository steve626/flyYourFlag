import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Col, Row } from '../../components/Grid';
// import { FormBtn } from '../../components/Form';
import API from "../../utils/API"

export class MapView extends Component {
  state = {
    users: '',
    teams: '',
    coordinates: [],
    userID: ""
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

  componentDidMount() {
    this.getUsers();
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  // getID() {
  //   let userID = this.localStorage.getItem('ID')
  //   return JSON.parse('ID');
  // };

  getUsers(users, coordinates) {
    console.log("getting users");
    API.getUsers().then(res => {
      users.findAll().where({ team: this.findTeam.value})
      this.setState({ users: coordinates })
    })
      .catch(err => console.log(err));
  };

  render(user) {
    if (!this.props.google || !this.state.users) {
      return <div>Loading...</div>;
    }
    return (

      <div
        style={{
          height: "80vh",
          width: "100vw"
        }}
      >

          <Map style={{
            height: "80vh",
            width: "100vw"
          }}
            google={this.props.google}
            onClick={this.onMapClick}
            initialCenter={{ lat: 33.356, lng: -111.79 }}
            zoom={16} >
            {this.state.users.map(user =>
              <Marker key={user._id} position={{ lat: user.coordinates[0].lat, lng: user.coordinates[0].lng }} />
            )}
          </Map>
        <Row>
            <Col size="sm-4">
              {this.state.users.length ? (
                <select id='findTeam' class="mt-3" style={{width:'100%'}}>
                {/* make drop down menu with all team's in OP's list */}
                  {this.state.users.map(teams => (                     
                    <option key ={ user._id } value={ user._id }>
                      {this.user.team}
                    </option>
                  ))}
                </select>
              ) : (
                  <h3 class="mt-2" style={{color:'white', textAlign:"center"}}>Choose a league </h3>
                )}
              </Col>
            <Col size="sm-8" />
      </Row>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBxQES5wS9zWkEtfsdjVPJXDxXXlH8FMzA"
})(MapView);
