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

      username: "",
      height: "",
      targetWeight: "",
      targetDate: "",
      startWeight: "",

      logbookId: 1,
      selectedEntryId: null,
      selectedEntry: null,
      selectedFoodId: null,
      selectedFood: null,

      entries: [],
      foods: [],
      workouts: [],
      liquids: [],

      newTotalCalCount: "",
      newNote: "",
      newDate: "",

      newFoodCalories: "",
      newFoodServing: "",
      newFoodMealType: "Breakfast",

      newWorkoutType: "",
      duration: "",
      caloriesLost:"",

      message: "",
      foodMessage: "",
      logbookMessage: "",

      usernameText: "",
      heightText: "",
      twText: "",
      tdText: "",
      swText: "",

      submitted: false
    }
  }, beforeMount() {
    console.log("mount");
    this.refreshAccount();
  },
  created: function () {
    if (localStorage.getItem('user') == null) {
      this.$router.push('/');
      window.alert('Please Log In');
    }
    this.refreshAccount();
  },
  methods: {
    changeUserInfo: async function() {
      try{
        var user = JSON.parse(localStorage.getItem('user'));
        console.log(user.username);
        let response = await AXIOS.post('/api/user/userInfo/'+ user.username + '/' + height.value + '/' + targetWeight.value+ '/' + targetDate.value + '/' + startWeight.value);
        console.log(response);
        if (response.data != "") {
            this.refreshAccount();
            this.message = '';
        }
        else {
          this.logbookMessage = "error in changing user info"
        }
      }catch(error){
        this.message = 'You\'re account information could not be updated at this time!';
      }
    },
    refreshAccount: async function(){
      try{
          console.log('REFRESH!!');
          var user = JSON.parse(localStorage.getItem('user'));
          this.usernameText = user.username;

          let response = await AXIOS.get('/api/user/get/' + user.username + '/', {}, {});

          var updatedUser = response.data;
          console.log(updatedUser);

        var storedUser = {
          name: updatedUser.name,
          lastName: updatedUser.lastName,
          email: updatedUser.email,
          username: updatedUser.username,
          height: updatedUser.height,
          targetWeight: updatedUser.targetWeight,
          targetDate: updatedUser.targetDate,
          startWeight: updatedUser.startWeight
        };

          localStorage.setItem('user',JSON.stringify(storedUser));

          this.heightText = updatedUser.height;
          this.twText = updatedUser.targetWeight;
          this.tdText = updatedUser.targetDate.toString().split("-").reverse().join("-");
          this.swText = updatedUser.startWeight;

          this.height = '';
          this.targetDate = '';
          this.targetWeight = '';
          this.startWeight = '';

      } catch(error) {
        console.log(error.message);
        this.errorRoute = error.message;
        this.message = 'You\'re account information could not be updated at this time!'
      }
    }
  }
}
