//google api key:AIzaSyCqMHiGD1ZwraCw2ejrOJwjD1BWDKOIKLM
//google maps api key: AIzaSyBxQES5wS9zWkEtfsdjVPJXDxXXlH8FMzA

import axios from "axios";

export default {
    //Gets all teams
    getTeams: function() {
        return axios.get("/api/team")
    },

    getTeamsByLeague : function(league) {
        return axios.get("/api/team/" + league)
    },
  
    saveTeam: function(teamData) {
      return axios.post("/api/team", teamData)

    },

    addTeamsToUser: function(teamPicked){
      return axios.put("/api/users", teamPicked)
    },

    getUsers: function() {
        return axios.get("/api/users");
    },

    getUsersByTeam: function(team) {
        return axios.get("/api/users/" + team);
    },

    createUser: function(userData){
      return axios.post('/api/users', userData);
    }
};