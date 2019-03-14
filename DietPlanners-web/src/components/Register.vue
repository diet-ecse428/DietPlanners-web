<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="img" >
      <img src="@/assets/DietPlanners.png" height="300" width="300"/>
    </div>
    <div style="font-size: 30px; color: blue">
        <router-link to="/"><b>Home</b></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Register page'
    }
  }
}
</script>

<styles>
</style>
