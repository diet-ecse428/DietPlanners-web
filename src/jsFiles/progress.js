import axios from 'axios'

var config = require('../../config');

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port;
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort;

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
});

// Objects
function ProgressDto(id){
  this.id = id;
}

function ProgressDto(id,weight,username,date){
  this.id = id;
  this.weight = weight;
  this.username = username;
  this.date = date;
}


export default {
  name: 'progress',
  data () {
    return {
      id: 1,
      selectedWeight: null,
      selectedPicture: null,

      username: "",

      newWeight: "",
      newPicture: "",
      newDate: "",

      message: "",

      progressEntries: [],

      staticUsername: 't'
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
    addEntryToProgress: async function(weight, date) {
      try{

        let response = await AXIOS.post('/api/progress/create?weight='+weight+'&date='+date+'&username=' + this.username);
        this.message = "";
        this.newWeight = "";
        this.newDate = "";
      }catch(error){
        this.message = "Make sure to fill out all fields with the correct format."
        this.errorRoute = error.message;
      }
      this.loadProgress();
    },
    weightFilter: function(weight) {
      this.selectedWeight = weight;
    },
    pictureFilter: function(picture) {
      this.selectedPicture = picture;
    },
    refresh: function() {
      var user = JSON.parse(localStorage.getItem('user'));
      this.username = user.username;
      this.loadProgress();
    },
    loadProgress: async function(){
      try{
        this.progressEntries = [];
        let response = await AXIOS.get('api/progress/getAllProgresses/'+this.username, {}, {});
        this.response = response.data;
        for (var i = 0; i < this.response.length; i++) {
          var progressEntry = new ProgressDto(response.data[i].id,
            response.data[i].weight,
            response.data[i].userId,
            response.data[i].date);
          this.progressEntries.push(progressEntry);
        }
      }catch(error){
        this.errorRoute = error.message;
      }
    }
  }
}
