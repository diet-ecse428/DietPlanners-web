<template>
  <div id="app">


    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  name: 'app',
  methods: {


  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: white; */
  /* margin-top: 60px; */

  background: url("./assets/background-opacity.png") no-repeat center center fixed ;  
    height: 55em; 
    /* width: 45em; */
    /* -webkit-background-size:cover; */
    -moz-background-size: cover;
    /* -o-background-size: cover; */
    background-size: cover; 
    background-repeat: no-repeat; */
    background-size: cover;
    /* opacity: 0.7;    */
}

img {
  display:inline;
  width:4em;
  margin-right:1em;
  padding:0px;
}

/* #nav{
  display: none;
} */
</style>
