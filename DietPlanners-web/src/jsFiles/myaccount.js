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

export default {
  name: 'register',
  data () {
    return {
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
    }
  },
  created: function () {
    this.refresh();
  },
  methods: {
    changeUserInfo: async function(username, height, targetweight, targetdate, startweight) {
      try{
        let response = await AXIOS.post('/api/user/userInfo?username=' + username + '&height=' + height + '&targetWeight=' + targetweight+ '&targetDate=' + targetdate + '&startWeight=' + startweight);
        console.log(response);

        if (response != null) {
            console.log("WORKS" + response);
            this.refresh();
        }
        else {
          this.logbookMessage = "error in changing user info"
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    },
    refresh: async function(){
      try{
        EventBus.$on('username', username => {
          this.username = username.value
        });
        console.log("Helllllllllllooooo" + username.value);
        let response = await AXIOS.get('/api/user/get/' + username.value + '/', {}, {});

        document.getElementById("#username").placeholder = response[0];
        document.getElementById("#height").placeholder = response[1];
        document.getElementById("#targetweight").placeholder = response[2];
        document.getElementById("#targetdate").placeholder = response[3];
        document.getElementById("#startweight").placeholder = response[4];

      } catch(error) {
        console.log(error.message);
        this.errorRoute = error.message;
      }
    }
  }
}
