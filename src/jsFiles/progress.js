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

      newWeight: "",
      newPicture: "",
      newDate: "",

      progressMessage: "",

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

        // const getBase64 = async (file) => {
        //   return new Promise((resolve, reject) => {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = () => resolve(reader.result);
        //     reader.onerror = error => reject(error);
        //   });
        // };
        // var file = await getBase64(this.$refs.pictureInput.file);

        let response = await AXIOS.post('/api/progress/create?weight='+weight+'&date='+date+'&username='+this.staticUsername);
        console.log(response);
        this.progressMessage = "Successfully added entry to progress!";
        this.newWeight = "";
        this.newDate = "";
      }catch(error){
        console.log(error.message);
        this.progressMessage = "The progress entry could not be entered at this time! Please try again later."
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
      this.loadProgress()
    },
    loadProgress: async function(){
      try{
        this.progressEntries = [];
        let response = await AXIOS.get('api/progress/getAllProgresses/'+this.staticUsername, {}, {});
        this.response = response.data;
        for (var i = 0; i < this.response.length; i++) {
          var progressEntry = new ProgressDto(response.data[i].id,
            response.data[i].weight,
            response.data[i].userId,
            response.data[i].date);
          this.progressEntries.push(progressEntry);
        }
      }catch(error){
        console.log(error.message);
        this.errorRoute = error.message;
      }
    }
  }
}
