import React, { Component } from require('react');


//this page just needs to show a map with fans matching your favorite teams locations.
//maybe a selector to choose the teams in the user's DB?
//we do need to be collecting user location data and storing it with the other users. 
//how else will we see locations? This will need to run in the background? Determine how often to query?



<Wrapper>
  <Div id="map"></Div>
</Wrapper>
<script>
  function initMap = () => {
    var options = {
      zoom: 12,
      center: //user location {lat: "" , lng: ""}
    }

    var map = new 
    google.maps.Map(document.getElementByID('map'), options);

    var marker = new google.maps.Marker({
      postion: { //locations of other fans with same team as you from DB //},
      map: map
    });

  }

  </script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBxQES5wS9zWkEtfsdjVPJXDxXXlH8FMzA&callback=initMap"
    async defer></script>
