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

function EntryDto(name, last, username, email, password, height, targetweight, targetdate, startweight){
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
    },
  methods: {
    addUserInfo: async function(name, last, username, email, password, height, targetweight, targetdate, startweight) {
      try{
        let response = await AXIOS.post('/api/user/create?name=' + name+ '&last=' + last + '&username=' + username + '&email=' + email+ '&password=' + password + '&height=' + height + '&targetWeight=' + targetweight+ '&targetDate=' + targetdate + '&startWeight=' + startweight);
        console.log(response);

        if (response != null) {
            this.username = username;
            EventBus.$emit('username', this.username);
            this.$router.push('/app/myaccount');
        }
        else {
          this.logbookMessage = "error in registering user"
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    }
  }
}