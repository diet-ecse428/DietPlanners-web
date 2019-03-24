<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="account-page">
    <form @submit.prevent="handleSubmit">
            <div class="username">
                <label for="username">Username</label>
                <input id="username" type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="height">
                <label htmlFor="height">Height</label>
                <input id="height" type="height"  v-model="height" name="height" class="form-control" :class="{ 'is-invalid': submitted && !height }" />
                <div v-show="submitted && !height" class="invalid-feedback">Height is required</div>
            </div>
            <div class="targetweight">
                <label htmlFor="targetweight">Target Weight</label>
                <input id="targetweight" type="targetweight"  v-model="targetweight" name="targetweight" class="form-control" :class="{ 'is-invalid': submitted && !targetweight }" />
                <div v-show="submitted && !targetweight" class="invalid-feedback">Target weight is required</div>
            </div>
            <div class="targetdate">
                <label htmlFor="targetdate">Target Date</label>
                <input id="targetdate" type="targetdate"  v-model="targetdate" name="targetdate" class="form-control" :class="{ 'is-invalid': submitted && !targetdate }" />
                <div v-show="submitted && !targetdate" class="invalid-feedback">Target date is required</div>
            </div>
            <div class="startweight">
                <label htmlFor="startweight">Start Weight</label>
                <input id="startweight" type="startweight" v-model="startweight" name="startweight" class="form-control" :class="{ 'is-invalid': submitted && !startweight }" />
                <div v-show="submitted && !startweight" class="invalid-feedback">Start weight is required</div>
            </div>
            <div class="submit">
               <button @click="changeUserInfo(username, height, targetweight, targetdate, startweight)" name="addButton">Add User Information</button>
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

</style>


