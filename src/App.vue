<template>
  <div id="app">

    <nav class="navbar navbar-expand-md navbar-light sticky-top" style="background-color:#F3FBFE;">
      <a class="navbar-brand" href="/" style="font-size:140%" > <img src="./assets/logo2.png" class="d-inline-block align-top"></a>

      <div class="navbar" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="app/myaccount" class="nav-link" style="font-size:140%">My Account<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link offset-sm-2" style="font-size:140%" href="/#/app/logbook">Logbook<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link offset-sm-6" style="font-size:140%" href="/#/app/progress">Progress<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link offset-sm-10" style="font-size:140%" href="/#/login">Logout<span class="sr-only">(current)</span></a>
          </li>

        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  margin-top: 60px; */
}

img {
  display:inline;
  width:4em;
  margin-right:1em;
  padding:0px;
}
</style>
