import axios from 'axios'
import PictureInput from "vue-picture-input";

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

function ProgressDto(id,weight,picture,username,date){
  this.id = id;
  this.weight = weight;
  this.picture = picture;
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

      staticUsername: 'kamy'
    }
  },
  components: {
    PictureInput
  },
  created: function () {
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

        let response = await AXIOS.post('/api/progress/create?username='+this.staticUsername+'&weight='+weight+'&date='+date+'&picture=image');
        console.log(response);

        if (response != null) {
          this.progressMessage = "Successfully added entry to progress "
        }
        else {
          this.progressMessage = "error in adding entry to progress"
        }
      }catch(error){
        console.log(error.message);
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
        let response = await AXIOS.get('api/progress/getAllEntries/kamy/', {}, {});
        this.response = response.data;
        for (var i = 0; i < this.response.length; i++) {
          var progressEntry = new ProgressDto(response.data[i].id,
            response.data[i].weight,
            response.data[i].image,
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
