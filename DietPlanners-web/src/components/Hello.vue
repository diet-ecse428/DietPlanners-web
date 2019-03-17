<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="img" >
      <img src="@/assets/DietPlanners.png" height="300" width="300"/>
    </div>
    <div style="font-size: 30px; color: blue">
    <router-link to="/login"><b>Login</b></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Diet Planners'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
