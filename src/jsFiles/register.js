import axios from 'axios'
import { EventBus } from './event-bus.js';

var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

// Objects
function userDto(userId){
    this.userId = userId;
}

function UserDTO(name, last, username, email, password, height, targetweight, targetdate, startweight){
  this.name = name;
  this.last = last;
  this.username = username;
  this.email = email;
  this.password = password;
  this.height = height;
  this.targetweight = targetweight;
  this.targetdate = targetdate;
  this.startweight = startweight;
}

export default {
  name: 'register',
  data () {
    return {

      username: "",
      name: "",
      last: "",
      email: "",
      password: "",
      height: "",
      targetweight: "",
      targetdate: "",
      startweight: "",

      message: ""
    }
  },
  created: function () {
    },
  methods: {
    addUserInfo: async function(name, last, username, email, password, height, targetweight, targetdate, startweight) {
      try{
        let response = await AXIOS.post('/api/user/create/' + name + '/' + last + '/' + username + '/' + email+ '/' + password + '/' + height + '/' + targetweight+ '/' + targetdate + '/' + startweight);

        if (response.data != "") {
            this.$router.push('/');
            let logbookresponse = await AXIOS.post('/api/logbook/create/' + username);
            this.message = '';
            window.alert("Successfully registered, please log in with your username and password.");
        }
        else {
          this.message = "error in registering user"
        }
      }catch(error){
        this.message = 'Make sure to fill out all fields with the correct format.';
      }
    }
  }
}
