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


function LiquidDto(calories,volume,id,entryId){
  this.calories = calories;
  this.volume = volume;
  this.id = id;
  this.entryId = entryId;
}

function FoodDto(mealType,calories,serving,id,entryId){
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
      logbookId: 6,
      entrySelected: false,
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

      //new food info
      newFoodCalories: "",
      newFoodServing: "",
      newFoodMealType: "Breakfast",

      //new liquid info
      newLiquidCalories: "",
      newLiquidVolume: "",

      //new workout info
      newWorkoutType: "",
      duration: "",
      caloriesLost:"",

      foodMessage: "",
      liquidMessage:"",
      logbookMessage: "",
      workoutMessage: "",
    }
  },
  created: function () {
    this.refresh();
    },
  methods: {
    addEntryToLogbook: async function(totcal, note, date) {
      try{
        let response = await AXIOS.post('/api/entry/create?logbookId=' + this.logbookId+ '&totCalCount=' + totcal + '&note=' + note + '&date=' + date);
        console.log(response);

        if (response != null) {
          this.logbookMessage = "Successfully added entry to logbook "
        }
        else {
          this.logbookMessage = "error in adding entry to logbook"
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
      this.loadLogbook();
    },
    entryFilter: function(entry) {
      this.selectedEntry = entry;
    },
    foodFilter: function(food) {
      this.selectedFood = food;
    },
    refresh: function() {
      this.loadLogbook()
    },
    loadLogbook: async function(){
      try{
        this.entries = [];
        let response = await AXIOS.get('/api/entry/getAllEntries/' + this.logbookId+ '/', {}, {});
        this.response = response.data;
        for (var i = 0; i < this.response.length; i++) {
          var entry = new EntryDto(response.data[i].date,
                                   response.data[i].remainingCal,
                                   response.data[i].totalCalCount,
                                   response.data[i].note,
                                   response.data[i].entryId,
                                   response.data[i].logbookId);
          this.entries.push(entry);
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    },
    loadEntry: function(){
      //called when an entry is selected from the logbook
      this.loadFoods()
      this.loadLiquids()
      this.loadWorkouts();
    },
    loadFoods: async function(){
      try{
        this.foods = [];
        let response = await AXIOS.get('/api/food/getAllFoods/' + this.selectedEntryId+ '/', {}, {});
        this.response = response.data;
        for (var i = 0; i < this.response.length; i++) {
          var food = new FoodDto(response.data[i].mealType,
                                    response.data[i].calories,
                                    response.data[i].serving,
                                    response.data[i].id,
                                    response.data[i].entryId);
          this.foods.push(food);
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    },
    loadLiquids: async function(){
      try{
        this.liquids = [];
        let response = await AXIOS.get('/api/liquid/getAllLiquids/' + this.selectedEntryId+ '/', {}, {});
        this.response = response.data;
        for (var i = 0; i < this.response.length; i++) {
          var liquid = new LiquidDto(response.data[i].calories,
                                   response.data[i].volume,
                                   response.data[i].id,
                                   response.data[i].entryId);
          this.liquids.push(liquid);
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    },
    loadWorkouts: async function(){
      try{
        this.workouts = [];
        let response = await AXIOS.get('/api/workout/getAllWorkouts/' + this.selectedEntryId+ '/', {}, {});
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
    addFoodToEntry: async function(calories, serving, mealType) {
      if (this.selectedEntryId === null){
        this.foodMessage = "Please select an entry";
        return;
      }

      try{
        let response = await AXIOS.post('/api/food/create?entryid=' + this.selectedEntryId+ '&calories=' + calories + '&mealtype=' + mealType + '&serving=' + serving);
        console.log(response);

        if (response != null) {
          this.foodMessage = "Successfully added food "
        }
        else {
          this.foodMessage = "error in adding food entry"
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
      this.loadFoods();
    },
    deleteFood: async function() {
      try{
        if (this.selectedFoodId === null){
          this.foodMessage = "Please select a food";
          return;
        }
        let response = await AXIOS.post('/api/food/remove/'+ this.selectedFoodId+'/', {}, {});
        console.log(response);

        if (response != null) {
          this.foodMessage = "Successfully deleted food"
        }
        else {
          this.foodMessage = "error in deleting food"
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
      this.loadFoods();
    },
    addLiquidToEntry: async function(calories, volume) {
      if (this.selectedEntryId === null){
        this.liquidMessage = "Please select an entry";
        return;
      }

      try{
        let response = await AXIOS.post('/api/liquid/create?entryid=' + this.selectedEntryId+ '&calories=' + calories + '&volume=' + volume );
        console.log(response);

        if (response != null) {
          this.liquidMessage = "Successfully added liquid"
        }
        else {
          this.liquidMessage = "error in adding liquid entry"
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
      this.loadLiquids();
    },
    selectEntry: function(){
      if (this.selectedEntryId != null){
        this.entrySelected = true;
        this.logbookMessage = "";
      } else {
        this.logbookMessage = "Please select an entry";
      }
    },
    backToLogbook: function() {
      this.entrySelected = false;
      this.selectedEntryId = null;
      this.selectedEntry= null;
    },

    addWorkoutToEntry: async function(entryId, type, duration, caloriesLost) {
      if (this.selectedEntryId === null){
        this.workoutMessage = "Please select an entry";
        return;
      }

      try{
        let response = await AXIOS.post('/api/workout/create?entryid=' + this.selectedEntryId+ '&caloriesLost=' + this.caloriesLost + '&type=' + this.type + '&duration=' + this.duration);
        console.log(response);

        if (response != null) {
          this.message = "successfully added workout to logbook"
        }
        else {
          this.message = "error in adding workout entry"
        }
        this.loadWorkouts();
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    }
  }
}
