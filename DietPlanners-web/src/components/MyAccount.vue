<template>
  <div class="hello">
    <div class="sidenav">
      <router-link to="/app/myaccount"><b><u>My Account</u></b></router-link>
      <router-link to="/app/logbook">Logbook</router-link>
      <router-link to="/">Logout</router-link>
    </div>
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'My account page'
    }
  }
}
</script>

<style scoped>
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
