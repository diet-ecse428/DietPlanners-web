import axios from 'axios'

var config = require('../../config');

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port;
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort;

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
});

// Objects
function UserDTO(username){
    this.username = username;
}

function UserDto(name,lastName,email,username,password){
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
}

export default {
    name: 'hello',
    data () {
        return {
            username: '',
            password: '',
            submitted: false,
            errorMessage: ''
        }
    },
    created: function () {
      localStorage.clear();
    },
    methods: {

        login: async function (username, password) {
            try {
                if (this.isNullOrWhitespace(username) || this.isNullOrWhitespace(password)){
                    this.errorMessage = "Please enter username and password";
                    return;
                }
              var user = await AXIOS.get('/api/user/login/'+username+'/'+password);
              var user = user.data;
              if(user != "") {
                    var storedUser = {
                        name: user.name,
                        lastName: user.lastName,
                        email: user.email,
                        username: user.username,
                        height: user.height,
                        targetWeight: user.targetWeight,
                        targetDate: user.targetDate,
                        startWeight: user.startWeight,
                        logbook: user.logbook,
                    };
                    localStorage.setItem('user',JSON.stringify(storedUser));
                    this.$router.push('/app/myaccount');
                } else {
                this.errorMessage = 'There was an error while attempting to log you in. Make sure you\'re credentials are correct or try again later!';
              }
            } catch(err){
            }
        },
        isNullOrWhitespace: function( input ) {
            return !input || !input.trim();
          }
    }
}
