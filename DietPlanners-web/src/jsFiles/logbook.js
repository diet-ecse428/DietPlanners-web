import axios from 'axios'

var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

// Objects
function LogbookDto(){
}

function EntryDto(){
}


function foodDto(){
}

function WorkoutDto( duration,caloriesLost,type,id,entryId){
    this.duration = duration;
		this.caloriesLost = caloriesLost;
		this.type = type;
		this.id = id;
		this.entryId = entryId;
}


export default {
  name: 'logbook',
  data () {
    return {
      logbookId: null,
      selectedEntryId: null,

      entries: [],
      foods: [],
      workouts: [],
      liquids: [],

      newFoodCalories: "",
      newFoodServing: "",
      newFoodMealType: "Breakfast",
      message: "",
      newWorkoutType: "",
      duration: "",
      caloriesLost:""      
    }
  },
  created: function () {
    this.loadLogbook()
  },
  methods: {
    loadLogbook: function(){
      this.loadWorkouts()
    },
    loadEntry: function(){
      //
    },
    loadFoods: function(){

    },
    loadLiquids: function(){

    },
    loadWorkouts: async function(){
      try{
        let response = await AXIOS.get('/api/workout/getAllWorkouts/', {}, {});
        this.response = response.data;
        for (var i = 0; i < this.response.length; i++) {
          var workout = new WorkoutDto(response.data[i].duration, response.data[i].caloriesLost, response.data[i].type, response.data[i].id,  response.data[i].entryId);
          this.workouts.push(workout);
        }
        }catch(error){
          console.log(error.message);
          this.errorRoute = error.message;
        }
    },
    addFoodToEntry: async function(entryId, calories, serving, mealType) {
      this.message = "Backend connection isn't setup yet"

      var params = {
        entryId: entryId,
        calories: calories,
        serving: serving,
        mealType: mealType
      }

      try{
        let response = await AXIOS.post('/api/food/create/', params);
        console.log(response);

        if (response != null) {
          this.message = "successfully added entry"
        }
        else {
          this.message = "error in adding food entry"
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    },
    addWorkoutToEntry: async function(entryId, caloriesLost, type, duration) {

      this.message = "Backend connection isn't setup yet";
      console.log("test");
      var params ={
        entryId:entryId,
        caloriesLost: caloriesLost,
        type: type,
        duration:duration
      }
      try{
        let response = await AXIOS.post('/api/workout/create/', params);
        console.log(response);

        if (response != null) {
          this.message = "successfully added workout to logbook"
        }
        else {
          this.message = "error in adding workout entry"
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    }
  }
}
