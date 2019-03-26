<template>
    <div id="home">
  <div class="hello">
    <div id="nav"></div>
      <div class="bg"></div>
	<br> <br> <br><br><br>
    <div class="form-group row">
    <h1>Welcome to DietPlanners!</h1>
    </div>

<div class="form-group row">
      <h2>DietPlanners is a web based application that helps   
        users track <br> and plan their weight loss journey.  
        </br></br>
        Login to your account or</br> Register bellow to begin!
      </h2>
    </div>
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
  <div class="form-group row">
<div class="col-xs-6 col-sm-3 offset-sm-4">

  <button type="submit" style=" position: relative; right:5 ; margin:10px;font-size:120%" class="btn btn-secondary btn-block" v-on:click="login(username,password)">Login</button>

</div>
<div class="col-xs-4 col-sm-3 offset-sm-4">
  <router-link to="/register"><button type="submit" style="margin:10px;font-size:120%" class="btn btn-secondary btn-block">Register</button></router-link>
</div>
  <p style="background-color:powderblue; margin: 50px;">{{ errorMessage }}</p>

</div>
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
label {
  background-color: none;
  color: gray;
  font-weight: bold;
  padding: 4px;
  /* font-size: xx-small; */
}
/* 
#home{
   background: url("../assets/background.png") no-repeat center center fixed ;  
    height: 55em; 

    width: 45em;
    -webkit-background-size:cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; 

    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.6;     
} */
h1{
  color: black;
  font-weight: bold;
  background-color: transparent;
  /* display: center; */
  padding: 30px;
  padding-bottom: 20px;
  text-align: center;
  margin:auto;
  
}
h2{
  color: black;
  font-size: 20px;
  background-color: transparent;
  margin:auto;
  
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
#nav{
  display: none;
}

</style>
