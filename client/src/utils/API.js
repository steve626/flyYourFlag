//google api key:AIzaSyCqMHiGD1ZwraCw2ejrOJwjD1BWDKOIKLM
//google maps api key: AIzaSyBxQES5wS9zWkEtfsdjVPJXDxXXlH8FMzA

import axios from "axios";

export default {
    //Gets all teams
    getTeams: function() {
        return axios.get("/api/team")
    }
}