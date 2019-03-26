<template>
  <div id="logbook">
        <nav class="navbar navbar-expand-md navbar-light sticky-top" style="background-color:#F3FBFE;">
      <a class="navbar-brand" href="/" style="font-size:140%" > <img src="../assets/logo2.png" class="d-inline-block align-top"></a>

      <div class="navbar" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/app/myaccount" class="nav-link" style="font-size:140%">My Account<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/app/logbook" class="nav-link offset-sm-2" style="font-size:140%" >Logbook<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/app/progress" class="nav-link offset-sm-6" style="font-size:140%" >Progress<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link offset-sm-10" style="font-size:140%" v-on:click="loggedIn = false">Logout<span class="sr-only">(current)</span></router-link>
          </li>

        </ul>
      </div>
    </nav>
    <div v-if="!entrySelected" id="logbookEntries">
      <h1 style="color: black">
        LOGBOOK
      </h1>
      <table>
        <thead>
          <tr id="header">
            <th class="th">Date</th>
            <th class="th">Total Calories</th>
            <th class="th">Remaining Calories</th>
            <th class="th">Note</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(data, index) in entries" :key='index' v-on:click="selectedEntryId = data.entryId; selectedEntryDate = data.date; loadEntry(); entryFilter((data,index))" v-bind:class="{selected: selectedEntry === (data,index)}">
              <td>{{data.date}}</td>
              <td>{{data.totalCalCount}}</td>
              <td>{{data.remainingCal}}</td>
              <td>{{data.note}}</td>
            </tr>
        </tbody>
      </table>
      <p style="background-color:powderblue; margin: 0px;">{{ message }}</p>
      <button @click="selectEntry()" name="selectEntryButton">Go to selected entry</button>
      <br />
      <br />
      <br />
      <h3>
        Add Entry
      </h3>
      <form>
      <input required v-model="newTotalCalCount" placeholder="Total Calories">
      <br />
      <input required v-model="newNote" placeholder="Note">
      <br />
      <button @click="addEntryToLogbook(newTotalCalCount, newNote, newDate)" name="addButton">Add to Logbook</button>
      </form>
      <br />
      <br />
    </div>


    <div v-if="entrySelected" id="entry">
      <button @click="backToLogbook()" name="backButton" class="backButton">Back to Logbook</button>
      <button v-if="foodsSelected || liquidsSelected || workoutsSelected" @click="backToEntry()" name="backButtonEntry" class="backButton">Back to Entry</button>
      <br/>
      <br/>
      <div id="entryInfo" v-if="!foodsSelected && !liquidsSelected && !workoutsSelected">
        <h1>
          Entry of {{selectedEntryData.date}}
        </h1>
        <p> Total calories: {{selectedEntryData.totalCalCount}} </p>
        <p> Remaining calories: {{selectedEntryData.remainingCal}} </p>
        <h3> Note</h3>
        <p>{{selectedEntryData.note}} </p>
      </div>

      <button v-if="!foodsSelected && !liquidsSelected && !workoutsSelected" @click="foodsSelected = true" name="foodsButton">Foods</button>
      <button v-if="!foodsSelected && !liquidsSelected && !workoutsSelected" @click="liquidsSelected = true" name="liquidsButton">Liquids</button>
      <button v-if="!foodsSelected && !liquidsSelected && !workoutsSelected" @click="workoutsSelected = true" name="workoutsButton">Workouts</button>

      <div v-if="foodsSelected" id="foods">
      <h2>
        Foods
      </h2>
        <table >
          <thead>
            <tr id="header">
              <th class="th">Name</th>
              <th class="th">Calories</th>
              <th class="th">Serving</th>
              <th class="th">Type</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in foods" :key='index' v-on:click="selectedFoodId = data.id; foodFilter((data,index));" v-bind:class="{selected: selectedFood === (data,index)}">
              <td>{{data.name}}</td>
              <td>{{data.calories}}</td>
              <td>{{data.serving}}</td>
              <td>{{data.mealType}}</td>
            </tr>

          </tbody>
        </table>
        <div id="newfood">
          <h3>
            Add Food
          </h3>
          <form>
          <input required v-model="newFoodName" placeholder="Name">
          <br />
          <input required v-model="newFoodCalories" placeholder="Calories">
          <br />
          <input required v-model="newFoodServing" placeholder="Serving">
          <br />
          <select v-model="newFoodMealType" placeholder="Meal Type">
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
          <p style="background-color:powderblue;">{{ message }}</p>

          <br />
          <button @click="addFoodToEntry(newFoodName, newFoodCalories, newFoodServing, newFoodMealType)" name="addButton">Add to Entry</button>
          </form>
          <br />
          <button @click="deleteFood(selectedFoodId)" name="addButton">Delete Selected Food</button>
          <br />
          <br />
        </div>
      </div>
      <br/>
      <div v-if="liquidsSelected" id="liquids">
        <h2>
          Liquids
        </h2>
        <table >
          <thead>
          <tr id="header">
            <th class="th">Calories</th>
            <th class="th">Volume</th>

          </tr>
          </thead>
          <tbody>
          <tr v-for="(data, index) in liquids" :key='index'>
            <td>{{data.calories}}</td>
            <td>{{data.volume}}</td>
          </tr>

          </tbody>

        </table>
        <div id="newliquid">
          <h3>
            Add Liquid
          </h3>
          <form>
          <input required v-model="newLiquidCalories" placeholder="Calories">
          <br />
          <input required v-model="newLiquidVolume" placeholder="Serving">
          <br />
          <br />
          <button @click="addLiquidToEntry(newLiquidCalories, newLiquidVolume)" name="addButton">Add to Entry</button>
          <br />
          <p style="background-color:powderblue;">{{ message }}</p>

          </form>
          <br />
        </div>
      </div>
      <br/>
      <div v-if="workoutsSelected" id="workouts">
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
        <div id="newworkout">
          <h3>
            Add Workout
          </h3>
          <form>
          <select v-model="newWorkoutType"  >
          <option value="" disabled hidden> Workout Type</option>
          <option value="cardio">Cardio</option>
          <option value="strength training">Strength Training</option>
        </select>
        <p style="background-color:powderblue;">{{ message }}</p>

          <br/>
          <input required v-model="duration" placeholder="Duration (minutes)">
          <br />
          <input required v-model="caloriesLost" placeholder="Calories Burned">
          <br />
          <button @click="addWorkoutToEntry(selectedEntryId,newWorkoutType,duration,caloriesLost)" name="addWorkoutButton">Add Workout to Entry</button>
          <br/>
          </form>
      </div>
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
    margin-bottom: 100px;
  }

  .th{
    background-color: #F3FBFE;
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
    background-color:#F3FBFE; /* Light Blue */
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

  .selected {
    background-color: lightskyblue;
  }
  .foods {
    display: ;
  }

  .backButton {
    display: block;
  }
</style>
