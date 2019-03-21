import axios from 'axios'

var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

// Objects
function LogbookDto(logbookId){
    this.logbookId = logbookId;
}

function EntryDto(date,remainingCal,totalCalCount,note,entryId, logbookId){
  this.date = date;
  this.remainingCal = remainingCal;
  this.totalCalCount = totalCalCount;
  this.note = note;
  this.entryId = entryId;
  this.logbookId = logbookId;
}


function liquidDto(calories,volume,id,entryId){
  this.calories = calories;
  this.volume = volume;
  this.id = id;
  this.entryId = entryId;
}

function foodDto(mealType,calories,serving,id,entryId){
  this.mealType = mealType;
  this.calories = calories;
  this.serving = serving;
  this.id = id;
  this.entryId = entryId;
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
    this.refresh();
    },
  methods: {
    refresh: function() {
      this.loadLogbook()
    },
    loadLogbook: async function(){
      //load all entries
    },
    loadEntry: function(){
      //called when an entry is selected from the logbook
      this.loadFoods()
      this.loadLiquids()
      this.loadWorkouts();
    },
    loadFoods: async function(){
      try{
        let response = await AXIOS.get();
        this.response = response.data;
        for (var i = 0; i < this.response.length; i++) {
          var food = new foodDto(response.data[i].mealType,
                                    response.data[i].calories,
                                    response.data[i].serving,
                                    response.data[i].id,
                                    response.data[i].entryId);
          this.workouts.push(food);
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    },
    loadLiquids: async function(){
      try{
        let response = await AXIOS.get();
        this.response = response.data;
        for (var i = 0; i < this.response.length; i++) {
          var liquid = new liquidDto(response.data[i].calories,
                                   response.data[i].volume,
                                   response.data[i].id,
                                   response.data[i].entryId);
          this.workouts.push(liquid);
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    },
    loadWorkouts: async function(){
      try{
        let response = await AXIOS.get('/api/workout/getAllWorkouts/', {}, {});
        this.response = response.data;
        for (var i = 0; i < this.response.length; i++) {
          var workout = new WorkoutDto(response.data[i].duration,
                                       response.data[i].caloriesLost,
                                       response.data[i].type,
                                       response.data[i].id,
                                       response.data[i].entryId);
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
    deleteFood: async function(foodId) {
      // try{
      //   let response = await AXIOS.post('/api/workout/create/', params);
      //   console.log(response);
      //
      //   if (response != null) {
      //     this.message = "successfully added workout to logbook"
      //   }
      //   else {
      //     this.message = "error in adding workout entry"
      //   }
      // }catch(error){
      //   console.log(error.message);
      //   this.errorRoute = error.message;
      // }
      // this.refresh();
    },
    addWorkoutToEntry: async function(entryId, caloriesLost, type, duration) {
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
