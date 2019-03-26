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

function EntryDto(username, height, targetweight, targetdate, startweight){
  this.username = username;
  this.height = height;
  this.targetweight = targetweight;
  this.targetdate = targetdate;
  this.startweight = startweight;
}

var user = "";

export default {
  name: 'register',
  data () {
    return {
      user: null,

      username: "",
      height: "",
      targetWeight: "",
      targetDate: "",
      startWeight: "",

      message: "",

      usernameText: "",
      heightText: "",
      twText: "",
      tdText: "",
      swText: "",

      heightError: "",
      targetWeightError: "",
      targetDateError: "",
      startWeightError: "",

    }
  },
  created: function () {
    user = localStorage.getItem('user');
    if (user == null) {
      this.$router.push('/');
      window.alert('Please Log In');
    }
    this.refreshAccount();

  },
  methods: {

    changeUserInfo: async function() {
      try{
        var url = '/api/user/userInfo/'+ this.user.username + '/' + height.value + '/' + targetWeight.value + '/' + targetDate.value + '/' + startWeight.value + '/'
        let userResponse = await AXIOS.post(url);

        if (parseInt(this.height) <= 0 || this.height.match(/[^$,.\d]/) || parseInt(this.targetWeight) <= 0 || this.targetWeight.match(/[^$,.\d]/) || parseInt(this.startWeight) <= 0 
        || this.startWeight.match(/[^$,.\d]/)){
          this.message = "Please enter valid fields";
          return;
        }

        if (userResponse.data != null) {

          user = userResponse.data;
          var storedUser = {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            username: user.username,
            height: user.height,
            targetWeight: user.targetWeight,
            targetDate: user.targetDate,
            startWeight: user.startWeight,
          };
          localStorage.setItem('user',JSON.stringify(storedUser));

          this.refreshAccount()
        }
        else {
          this.message = "There was an error updating your account. Please contact support.";
        };

      }catch(error){
        this.message = 'Please fill out all of the fields in the correct format.';
      }
    },
    refreshAccount: function(){
      try{
          this.user = JSON.parse(localStorage.getItem('user'));

          this.usernameText = this.user.username;
          this.heightText = this.user.height;
          this.twText = this.user.targetWeight;
          this.tdText = this.user.targetDate;
          this.swText = this.user.startWeight;

          this.height = '';
          this.targetDate = '';
          this.targetWeight = '';
          this.startWeight = '';

          this.heightError = null;
          this.targetWeightError = null;
          this.targetDateError = null;
          this.startWeightError = null;

          this.message = "";
      } catch(error) {
        this.message = 'Your account information could not be updated at this time!'
      }
    }
  }
}
