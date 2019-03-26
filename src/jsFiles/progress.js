import axios from 'axios';

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

function ProgressDto(id, weight, username, date){
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

        if (parseInt(weight) <= 0 || weight.match(/[^$,.\d]/) ){
          this.message = "Please enter valid weight";
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
        date = today



        // if(moment(date, "YYYY-MM-DD", false).isValid()){
        //   console.log("CHEEEEEEEEZ FALSE");
        //   this.message("Please enter valid date");
        //   return;
        // }
        // else{
        //   console.log("CHEEEEEEEEZ true");
        // }


        // const getBase64 = async (file) => {
        //   return new Promise((resolve, reject) => {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = () => resolve(reader.result);
        //     reader.onerror = error => reject(error);
        //   });
        // };
        // var file = await getBase64(this.$refs.pictureInput.file);

        console.log(response);
        this.progressMessage = "Successfully added entry to progress!";
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
