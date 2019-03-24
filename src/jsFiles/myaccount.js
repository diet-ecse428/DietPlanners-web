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
      swText: ""
    }
  }, beforeMount() {
    console.log("mount");
    this.refresh()
  },
  created: function () {
    this.refresh();
  },
  methods: {
    changeUserInfo: async function(username, height, targetweight, targetdate, startweight) {
      try{
        let response = await AXIOS.post('/api/user/userInfo?username=' + username + '&height=' + height + '&targetWeight=' + targetweight+ '&targetDate=' + targetdate + '&startWeight=' + startweight);

        if (response != null) {
            this.username = username
            EventBus.$emit('username', this.username);
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
          this.username = username.value;
        });
          
          let response = await AXIOS.get('/api/user/get/' + username.value + '/', {}, {});
          console.log(response + "hello")
          console.log(response.data.name)
          this.usernameText = response.data.username;
          this.heightText = response.data.height;
          this.twText = response.data.targetWeight;
          this.tdText = response.data.targetDate;
          this.swText = response.data.startWeight;

      } catch(error) {
        console.log(error.message);
        this.errorRoute = error.message;
      }
    }
  }
}
