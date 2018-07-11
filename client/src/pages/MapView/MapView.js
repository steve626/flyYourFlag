import React, { Component } from require('react');
const geolocation = require ('google-geolocation') ({
  key: 'AIzaSyBxQES5wS9zWkEtfsdjVPJXDxXXlH8FMzA'
});

//this page just needs to show a map with fans matching your favorite teams locations.
//maybe a selector to choose the teams in the user's DB?
//we do need to be collecting user location data and storing it with the other users. 
//how else will we see locations? This will need to run in the background? Determine how often to query?

function initMap = () => {
  var options = {
    zoom: 12,
    center: //user location {lat: "" , lng: ""}
  }

  var map = new 
  google.maps.Map(document.getElementByID('map'), options);

  var marker = new google.maps.Marker({
    position: { //locations of other fans with same team as you from DB //},
    map: map
  });

}
//userDB will have random number for a team name. That will need to be made to correspond to
//one of the teams from the teamsDB.
//findAllAndReplace number with team name. Not sure where that needs to go.


<Wrapper>
  <Div id="map"></Div>
</Wrapper>

 

  
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxQES5wS9zWkEtfsdjVPJXDxXXlH8FMzA&callback=initMap"
    async defer></script>
