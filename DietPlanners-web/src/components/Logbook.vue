<template>
  <div id="logbook">
    <div class="sidenav">
      <router-link to="/app/myaccount">My Account</router-link>
      <router-link to="/app/logbook"><b><u>Logbook</u></b></router-link>
      <router-link to="/" id="logout">Logout</router-link>
    </div>
    <div id="logbook">
      <h1>
        LOGBOOK
      </h1>
      <table>
        <thead>
          <tr id="header">
            <th class="th">Entry Id</th>
            <th class="th">Date</th>
            <th class="th">Total Calories</th>
            <th class="th">Note</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="">
            <td>1</td>
            <td>March 17th 2019</td>
            <td>2500</td>
            <td>Sample Entry</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="entry">
      <h1>
        SELECTED ENTRY
      </h1>
      <h2>
        Foods
      </h2>
      <table >
        <thead>
          <tr id="header">
            <th class="th">Food Id</th>
            <th class="th">Calories</th>
            <th class="th">Serving</th>
            <th class="th">Type</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in foods" :key='index'>
            <td>{{data.id}}</td>
            <td>{{data.calories}}</td>
            <td>{{data.serving}}</td>
            <td>{{data.type}}</td>
          </tr>

        </tbody>

      </table>
      <button @click="deleteFood(foodId)" name="addButton">Delete Selected Food</button>
      <br />
      <br />
      <h2>
        Liquids
      </h2>
      <table >
        <thead>
        <tr id="header">
          <th class="th">Id</th>
          <th class="th">Calories</th>
          <th class="th">Volume</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(data, index) in liquids" :key='index'>
          <td>{{data.id}}</td>
          <td>{{data.calories}}</td>
          <td>{{data.volume}}</td>
        </tr>

        </tbody>

      </table>
      <h2>
        Workouts
      </h2>
      <table >
        <thead>
        <tr id="header">
          <th class="th">Type</th>
          <th class="th">Duration</th>
          <th class="th">Calories Lost</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(data, index) in workouts" :key='index'>
          <td>{{data.type}}</td>
          <td>{{data.duration}}</td>
          <td>{{data.caloriesLost}}</td>
        </tr>
        </tbody>
      </table>


    </div>
    <div id="additems">
      <div id="newfood">
        <h1>
          Add Food
        </h1>
        <input v-model="newFoodCalories" placeholder="Calories">
        <br />
        <input v-model="newFoodServing" placeholder="Serving">
        <br />
        <select v-model="newFoodServing" placeholder="Meal Type">
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
        </select>
        <br />
        <button @click="addFoodToEntry(newFoodCalories, newFoodServing, newFoodServing)" name="addButton">Add to Logbook</button>
        <br />
      </div>
      <div id="newworkout">
          <h1>
          Add Workout
        </h1>
        <select v-model="newWorkoutType" >
          <option value="" disabled hidden> Workout Type</option>
          <option value="cardio">Cardio</option>
          <option value="strength training">Strength Training</option>
        </select>
        <br/>
        <input v-model="duration" placeholder="Duration (minutes)">
        <br /> 
        <input v-model="caloriesBurned" placeholder="Calories Burned">
        <br />
        <button @click="addWorkoutToEntry(12211221,newWorkoutType,duration,caloriesBurned)" name="addWorkoutButton">Add Workout to Logbook</button>
        <br/>
        <p>{{ message }}</p>
      </div>
       
      
      <div id="newliquid">
        <h1>
          Add Liquid
        </h1>

        <input  placeholder="">
        <br />
        <input  placeholder="">
        <br />

        <br />
        <button @click="" name="addButton">Add to Logbook</button>
        <br />
      </div>
    </div>
  </div>

</template>

<script src="../jsFiles/logbook.js">
</script>

<style scoped>

  table{
    margin:auto;
    table-layout: fixed;
    width: 50%;
    height: auto;
    margin-bottom: 200px;
  }

  .th{
    background-color: #1B93F7;
    position: sticky;
    top:0;
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



  /* page style */
  #logout {
    position: absolute;
    bottom: 1%;
    left: 21%;
  }
  #additems {
    display:flex;
    justify-content: center;
  }
  #additems div {
    padding:1%;
  }

</style>
