<template>
    <div id="home">
  <div class="hello">
      <div class="bg"></div>
	<br> <br> <br>
  <!-- <form action="/#/app"> -->
  <div class="form-group row">
  <div class="col-xs-6 offset-sm-5 text-center">
    <label for="username" style="font-size:140%">Username:</label>
    <input required type="text" class="form-control" id="username" placeholder="Username" v-model="username">
  </div>
  </div>
  <div class="form-group row">
<div class="col-xs-6 offset-sm-5 text-center">
    <label for="pwd" style="font-size:140%" >Password:</label>
    <input required type="password" class="form-control" id="pwd" placeholder="Password" v-model="password">
<div class="valid-feedback">
        Looks good!>
      </div>
<div class="invalid-feedback">
        Please provide a password.
      </div>
  </div>
</div>
  <div class="checkbox row">
<div class="col-xs-6 offset-sm-5 text-center">
    <label style="font-size:120%" ><input type="checkbox" > Remember me</label>
  </div>
</div>
<div class="row">
<div class="container">
<div class="col-xs-4 col-sm-3 offset-sm-4">

  <button type="submit" style="margin:10px;font-size:120%" class="btn btn-secondary btn-block" v-on:click="login(username,password)">Login</button>

</div>
<div class="col-xs-4 col-sm-3 offset-sm-4">
  <router-link to="/register"><button type="submit" style="margin:10px;font-size:120%" class="btn btn-secondary btn-block">Register</button></router-link>
</div>
  <p style="background-color:powderblue;">{{ errorMessage }}</p>

</div>
</div>
<!-- </form> -->

</div>
</div>


 <!--   <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="img" >
      <img src="@/assets/DietPlanners.png" height="300" width="300"/>
    </div>
   <div style="font-size: 30px; color: blue">
    <router-link to="/login"><b>Login</b></router-link>
    </div> 
    
  </div>-->
</template>

<script src="../jsFiles/hello.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#home {
   background-image: url("../assets/background.png") ; 
    height: 40em; 
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.5;

}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


.btn-xl {
    padding: 40px 40px;
    font-size: 20px;
    border-radius: 20px;
}

/* h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
router-link {
    position: absolute;
    font-weight: bold; 
    font-size: 30
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
*/

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

</style>
