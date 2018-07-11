import _ from 'lodash';
import faker from 'faker';
import { Db, Server } from 'mongodb';

const faker = require('faker');

const MINIMUM_USERS = 2000;
const USERS_TO_ADD = 15000;

let usersCollection;
const db = new Db('fyf_db', new Server('localhost', 27017));
db.open()
.then(() => {
  usersCollection = db.collection('users');
  return usersCollection.count({});
})
.then(count => {
  if (count < MINIMUM_USERS){
    const users = _.times(USERS_TO_ADD, () => createUsers());

    usersCollection.insertMany(users);
  }
})
.catch(err => console.log(err));


function createUsers() {
  return {
    email: faker.email.findEmail(),
    password: faker.password.findPassword(),
    //assign team to _id of teams in teamDB should be ~100 fans of each team
    //if we remove NHL and MLS replace the max number with 93
    team: randomBetween(0, 148),
    geometry: {
      //should reduce our population to the immediate area
      lng: randomBetween(-111.85, -111.80),
      lat: randomBetween(33.3, 33.5)
    }
  };
}

function randomBetween(min, max) {
  return ~~(Math.random() * (max-min)) + min;
}