<template>
  <div class="hello">
            <nav class="navbar navbar-expand-md navbar-light sticky-top" style="background-color:#F3FBFE;">
      <a class="navbar-brand" href="/" style="font-size:140%" > <img src="../assets/logo2.png" class="d-inline-block align-top"></a>

      <div class="navbar" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/app/myaccount" class="nav-link" style="font-size:140%">My Account<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/app/logbook" class="nav-link offset-sm-2" style="font-size:140%" >Logbook<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/app/progress" class="nav-link offset-sm-6" style="font-size:140%" >Progress<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link offset-sm-10" style="font-size:140%" v-on:click="loggedIn = false">Logout<span class="sr-only">(current)</span></router-link>
          </li>

        </ul>
      </div>
    </nav>
    <div class="account-page">
      <h5 style="background-color:powderblue; margin: 50px; color: red">{{ message }}</h5>
    <form @submit.prevent="changeUserInfo">
            <div class="username">
                <label>Username: </label><p>{{usernameText}}</p>
            </div>
            <div class="height">
                <label htmlFor="height">Height: {{heightText}} cm</label>
                <input required placeholder="cm" id="height" type="height"  v-model="height" name="height" class="form-control" :class="{ 'is-invalid': heightError }" />
                <div class="invalid-feedback">{{heightError}}</div>
            </div>
            <div class="targetWeight">
                <label htmlFor="targetWeight">Target Weight: {{twText}} kg </label>
                <input required placeholder="kg" id="targetWeight" type="targetWeight"  v-model="targetWeight" name="targetWeight" class="form-control" :class="{ 'is-invalid': targetWeightError }" />
                <div class="invalid-feedback">{{targetWeightError}}</div>
            </div>
            <div class="targetDate">
                <label htmlFor="targetDate">Target Date: {{tdText}}</label>
                <input required placeholder="yyyy-mm-dd" id="targetDate" type="targetDate"  v-model="targetDate" name="targetDate" class="form-control" :class="{ 'is-invalid': targetDateError }" />
                <div class="invalid-feedback">{{targetDateError}}</div>
            </div>
            <div class="startWeight">
                <label htmlFor="startWeight">Start Weight: {{swText}} kg</label>
                <input required placeholder="kg" id="startWeight" type="startWeight" v-model="startWeight" name="startWeight" class="form-control" :class="{ 'is-invalid': startWeightError}" />
                <div class="invalid-feedback">{{startWeightError}}</div>
            </div>
            <div class="submit">
               <button @click="changeUserInfo()" name="addButton">Change User Information</button>
            </div>
      </form>
    </div>
  </div>
</template>

<!--<script>-->
<!--export default {-->
  <!--name: 'hello',-->
  <!--data () {-->
    <!--return {-->
      <!--msg: 'My account page'-->
    <!--}-->
  <!--}-->
<!--}-->
<!--</script>-->

<script src="../jsFiles/myaccount.js">
</script>

<style scoped>

  body {
    margin-top: 10px;
  }
 /* The sidebar menu */
  .sidenav {
    height: 100%; /* Full-height: remove this if you want "auto" height */
    width: 15%; /* Set the width of the sidebar */
    position: fixed; /* Fixed Sidebar (stay in place on scroll) */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color:#0590fa; /* Light Blue */
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 20px;

  }

  /* The navigation menu links */
  .sidenav a {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 25px;
    color: #ffffff;
    display: block;
  }

  /* When you mouse over the navigation links, change their color */
  .sidenav a:hover {
    color: black;
  }

  .account-page {
    /* background-color: blue; */
    height: 50vh; 
    width: 50vw;
    margin: 0 auto;

  /* color: white; */
}
  #logout {
    position: absolute;
    bottom: 1%;
    left: 21%;
  }

  #error {
    background-color: powderblue;
    color: red;
  }

</style>


