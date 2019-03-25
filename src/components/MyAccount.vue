<template>
  <div class="hello">
    <div class="account-page">
    <form @submit.prevent="changeUserInfo">
            <div class="username">
                <label>Username: </label><p>{{usernameText}}</p>
            </div>
            <div class="height">
                <label htmlFor="height">Height: {{heightText}} </label>
                <input placeholder="" id="height" type="height"  v-model="height" name="height" class="form-control" :class="{ 'is-invalid': submitted && !height }" />
                <div v-show="submitted && !height" class="invalid-feedback">Height is required</div>
            </div>
            <div class="targetWeight">
                <label htmlFor="targetWeight">Target Weight: {{twText}} </label>
                <input placeholder="" id="targetWeight" type="targetWeight"  v-model="targetWeight" name="targetWeight" class="form-control" :class="{ 'is-invalid': submitted && !targetWeight }" />
                <div v-show="submitted && !targetweight" class="invalid-feedback">Target weight is required</div>
            </div>
            <div class="targetDate">
                <label htmlFor="targetDate">Target Date: {{tdText}}</label>
                <input placeholder="" id="targetDate" type="targetDate"  v-model="targetDate" name="targetDate" class="form-control" :class="{ 'is-invalid': submitted && !targetDate }" />
                <div v-show="submitted && !targetDate" class="invalid-feedback">Target date is required</div>
            </div>
            <div class="startWeight">
                <label htmlFor="startWeight">Start Weight: {{swText}}</label>
                <input placeholder="" id="startWeight" type="startWeight" v-model="startWeight" name="startWeight" class="form-control" :class="{ 'is-invalid': submitted && !startWeight }" />
                <div v-show="submitted && !startWeight" class="invalid-feedback">Start weight is required</div>
            </div>
            <div class="submit">
               <button @click="changeUserInfo()" name="addButton">Change User Information</button>
            </div>
      </form>
    </div>
    <h3>{{ message }}</h3>
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


