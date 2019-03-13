import axios from 'axios'

var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

export default {
  name: 'login',
  data () {
    return {
      entryId: "",
      calories: "",
      serving: "",
      mealType: "Breakfast",
      message: ""
    }
  },
  created: function () {
  },
  methods: {
    addToLogbook: async function(entryId, calories, serving, mealType) {
      this.message = "Backend onnection isn't setup yet"
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
