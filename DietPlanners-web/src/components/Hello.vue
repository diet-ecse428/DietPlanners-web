<template>
  <div class="hello">

    <div class="sidenav">
      <router-link to="/" id="hello"><b>Home</b></router-link>
      <router-link to="/app/logbook" id="logbook">Logbook</router-link>
    </div>

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="" target="_blank">Login</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
  border-radius: 10px;

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
</style>
