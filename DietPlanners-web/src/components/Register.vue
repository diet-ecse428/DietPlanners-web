<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="img" >
      <img src="@/assets/DietPlanners.png" height="300" width="300"/>
    </div>
    <div id="form">
      <form @submit.prevent="handleSubmit">
            <div class="name">
                <label for="name">Name</label>
                <input id="name" type="text" onkeypress="this.style.width = ((this.value.length) * 8) + 'px';" v-model="name" name="name" class="form-control" :class="{ 'is-invalid': submitted && !name }" />
                <div v-show="submitted && !name" class="invalid-feedback">name is required</div>
            </div>
            <div class="last">
                <label for="last">Last Name</label>
                <input id="last" type="text" onkeypress="this.style.width = ((this.value.length) * 8) + 'px';" v-model="last" name="last" class="form-control" :class="{ 'is-invalid': submitted && !last}" />
                <div v-show="submitted && !last" class="invalid-feedback">Last Name is required</div>
            </div>
            <div class="username">
                <label for="username">Username</label>
                <input id="username" type="text" onkeypress="this.style.width = ((this.value.length) * 8) + 'px';" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="email">
                <label for="email">Email</label>
                <input id="email" type="text" onkeypress="this.style.width = ((this.value.length) * 8) + 'px';" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" />
                <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
            </div>
            <div class="password">
                <label for="password">Password</label>
                <input id="password" type="text" onkeypress="this.style.width = ((this.value.length) * 8) + 'px';" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="height">
                <label htmlFor="height">Height</label>
                <input id="height" type="height" onkeypress="this.style.width = ((this.value.length ) * 8) + 'px';" v-model="height" name="height" class="form-control" :class="{ 'is-invalid': submitted && !height }" />
                <div v-show="submitted && !height" class="invalid-feedback">Height is required</div>
            </div>
            <div class="targetweight">
                <label htmlFor="targetweight">Target Weight</label>
                <input id="tweight" type="targetweight" onkeypress="this.style.width = ((this.value.length ) * 8) + 'px';" v-model="targetweight" name="targetweight" class="form-control" :class="{ 'is-invalid': submitted && !targetweight }" />
                <div v-show="submitted && !targetweight" class="invalid-feedback">Target weight is required</div>
            </div>
            <div class="targetdate">
                <label htmlFor="targetdate">Target Date</label>
                <input id="tdate" type="targetdate" onkeypress="this.style.width = ((this.value.length ) * 8) + 'px';" v-model="targetdate" name="targetdate" class="form-control" :class="{ 'is-invalid': submitted && !targetdate }" />
                <div v-show="submitted && !targetdate" class="invalid-feedback">Target date is required</div>
            </div>
            <div class="startweight">
                <label htmlFor="startweight">Start Weight</label>
                <input id="sweight" type="startweight" onkeypress="this.style.width = ((this.value.length ) * 8) + 'px';" v-model="startweight" name="startweight" class="form-control" :class="{ 'is-invalid': submitted && !startweight }" />
                <div v-show="submitted && !startweight" class="invalid-feedback">Start weight is required</div>
            </div>
            <div class="submit">
               <button id="btn" @click="addUserInfo(username, height, targetweight, targetdate, startweight)" name="addButton">Register</button>
               <router-link to="/"><b>HOME</b></router-link>
            </div>
            <div id="error">
              <p id="message">Hello</p>
            </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { 'Access-Control-Allow-Origin': frontendUrl }
})
var btn = document.querySelector("#btn");
var error = document.querySelector("#message");

try {
  var name = document.getElementById("name").value;
  var last = document.getElementById("last").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var height = document.getElementById("height").value;
  var tweight = document.getElementById("tweight").value;
  var tdate = document.getElementById("tdate").value;
  var sweight = document.getElementById("sweight").value;
} catch(err) {
  console.log(err);
}

var bodyFormData = new FormData();
bodyFormData.set("name", name);
bodyFormData.set("last", last);
bodyFormData.set("username", username);
bodyFormData.set("email", email);
bodyFormData.set("password", password);
bodyFormData.set("height", height);
bodyFormData.set("tweight", tweight);
bodyFormData.set("tdate", tdate);
bodyFormData.set("sweight", sweight);

AXIOS({
    method: 'post',
    url: '/create',
    data: bodyFormData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        this.$router.push('/app/myaccount');
    })
    .catch(function (response) {
        error.innerText = "error";
    });


export default {
  name: 'hello',
  data () {
    return {
      msg: 'Register page'
    }
  }

}
</script>

<style>
  #message {
    color: red;
  }
</style>

