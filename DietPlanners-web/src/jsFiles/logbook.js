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


export default {
  name: 'login',
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
      message: ""
    }
  },
  created: function () {
    this.loadLogbook();
  },
  methods: {
    loadLogbook: function(){

    },
    loadEntry: function(){
      //
    },
    loadFoods: function(){

    },
    loadLiquids: function(){

    },
    loadWorkouts: function(){

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
    }

  }
}
