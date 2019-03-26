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

function FoodDto(name, mealType,calories,serving,id,entryId){
  this.name = name;
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
      selectedEntryData: null,
      selectedEntryId: null,
      selectedEntry: null,
      selectedFoodId: null,
      selectedFood: null,

      foodsSelected: false,
      liquidsSelected: false,
      workoutsSelected: false,

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

      message: "",

    }
  },
  created: function () {
    if (localStorage.getItem('user') == null) {
      this.$router.push('/');
      window.alert('Please Log In');
    }
    this.refresh();
    },
  methods: {
    addEntryToLogbook: async function(totcal, note, date) {
      try{
        if ( totcal == ""){
          this.message = "Please fill in calories";
          return;
        }
        //check if negative, equal to 0 or non-numeric value
        if (parseInt(totcal) <= 0 || totcal.match(/[^$,.\d]/)){
          this.message = "Please enter valid calories";
          return;
        }
      
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        if (dd < 10) {
          dd = '0' + dd;
        } 
        if (mm < 10) {
          mm = '0' + mm;
        } 
        var today = yyyy + '-' + mm + '-' + dd;
        // var today = dd + '-' + mm + '-' + yyyy;
        date = today


       
        let response = await AXIOS.post('/api/entry/create?logbookId=' + this.logbookId+ '&totCalCount=' + totcal + '&note=' + note + '&date=' + date);

        if (response != null) {
          this.message = "Successfully added entry to logbook "
        }
        else {
          this.message = "error in adding entry to logbook"
        }
      }catch(error){
        this.message = error.message;
      }
      this.loadLogbook();
    },
    entryFilter: async function(entry) {
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
        let logresponse = await AXIOS.get('/api/user/getLogbook/' + JSON.parse(localStorage.getItem('user')).username + '/', {}, {});
        this.logbookId = logresponse.data.logbookId;
        this.entries = [];
        let response = await AXIOS.get('/api/entry/getAllEntries/' + this.logbookId + '/', {}, {});
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
        this.message = error.message;
      }
    },
    loadEntry: async function(){
      try {
        this.selectedEntryData = null;
        let entry = await AXIOS.get('/api/entry/get/' + this.selectedEntryId + '/', {}, {});
        this.selectedEntryData = entry.data;
      }catch(error){
        this.message = error.message;
      }
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
          var food = new FoodDto(
                                    response.data[i].name,
                                    response.data[i].mealType,
                                    response.data[i].calories,
                                    response.data[i].serving,
                                    response.data[i].id,
                                    response.data[i].entryId);
          this.foods.push(food);
        }
      }catch(error){
        this.message = error.message;
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
        this.message = error.message;
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
          this.message = error.message;
        }
    },
    addFoodToEntry: async function(name, calories, serving, mealType) {
      
      if (this.selectedEntryId === null){
        this.message = "Please select an entry";
        return;
      }

      try{
        
        //check if negative, equal to 0 or non-numeric value
        if (this.isNullOrWhitespace(name) || parseInt(calories) <= 0 || calories.match(/[^$,.\d]/) || this.isNullOrWhitespace(calories) || parseInt(serving) <= 0 || serving.match(/[^$,.\d]/) || this.isNullOrWhitespace(serving)){
          this.message = "Please enter valid calories and serving";
          return;
      }

        let response = await AXIOS.post('/api/food/create?name=' + name + '&entryid=' + this.selectedEntryId+ '&calories=' + calories + '&mealtype=' + mealType + '&serving=' + serving);

        if (response != null) {
          this.message = "Successfully added food "
        }
        else {
          this.message = "error in adding food entry"
        }
      }catch(error){
        this.message = error.response.data.message
      }
      this.loadFoods();
    },
    deleteFood: async function() {
      try{
        if (this.selectedFoodId === null){
          this.message = "Please select a food";
          return;
        }
        let response = await AXIOS.post('/api/food/remove/'+ this.selectedFoodId+'/', {}, {});

        if (response != null) {
          this.message = "Successfully deleted food"
          this.selectedFoodId = null;
        }
        else {
          this.message = "error in deleting food"
        }
      }catch(error){
        this.message = error.message;
      }
      this.loadFoods();
    },
    addLiquidToEntry: async function(calories, volume) {
      if (this.selectedEntryId === null){
        this.message = "Please select an entry";
        return;
      }


      try{
        //check if negative, equal to 0 or non-numeric value
        if (parseInt(calories) <= 0 || this.isNullOrWhitespace(calories) || calories.match(/[^$,.\d]/) || parseInt(volume) <= 0 || volume.match(/[^$,.\d]/) || this.isNullOrWhitespace(volume)){
          this.message = "Please enter valid calories and volume";
          return;
      }
        let response = await AXIOS.post('/api/liquid/create?entryid=' + this.selectedEntryId+ '&calories=' + calories + '&volume=' + volume );

        if (response != null) {
          this.message = "Successfully added liquid"
        }
        else {
          this.message = "error in adding liquid entry"
        }
      }catch(error){
        this.message = error.message;
      }
      this.loadLiquids();
    },
    selectEntry: function(){
      if (this.selectedEntryId != null){
        this.entrySelected = true;
        this.message = "";
      } else {
        this.message = "Please select an entry";
      }
    },
    backToLogbook: function() {
      this.message= "";
      this.backToEntry();
      this.entrySelected = false;
      this.selectedEntryId = null;
      this.selectedEntry= null;
    },
    backToEntry: function() {
      this.message = "";
      this.foodsSelected = false;
      this.liquidsSelected = false;
      this.workoutsSelected = false;
    },

    addWorkoutToEntry: async function(entryId, type, duration, caloriesLost) {
      if (this.selectedEntryId === null){
        this.message = "Please select an entry";
        return;
      }

      try{
        if(type == ""){
          this.message = "Please select workout type."
          return;
        }
        //check if negative, equal to 0 or non-numeric value
        if (parseInt(this.duration) <= 0 || this.isNullOrWhitespace(this.duration) || this.duration.match(/[^$,.\d]/) || parseInt(this.caloriesLost) <= 0 || this.caloriesLost.match(/[^$,.\d]/) || this.isNullOrWhitespace(this.caloriesLost)){
          this.message = "Please enter valid calories and serving";
          return;
      }

        let response = await AXIOS.post('/api/workout/create?entryid=' + this.selectedEntryId + '&caloriesLost=' + this.caloriesLost + '&type=' + type + '&duration=' + this.duration);
        console.log(response);

        if (response != null) {
          this.message = "successfully added workout to logbook"
        }
        else {
          this.message = "error in adding workout entry"
        }
        this.loadWorkouts();
      }catch(error){
        this.message = error.response.data.message;
      }
    },

    isNullOrWhitespace: function( input ) {
      return !input || !input.trim();
    }
  }
}
