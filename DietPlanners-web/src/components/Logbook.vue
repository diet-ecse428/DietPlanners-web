<template>
  <div id="logbook">
    <div class="sidenav">
      <router-link to="/">My Account</router-link>
      <router-link to="/app/logbook"><b>Logbook</b></router-link>
      <router-link to="/"><b>Logout</b></router-link>
    </div>

    <div id="entries">
      <h1>
        Your Logbook
      </h1>
      <table >
        <thead>
          <tr id="header">
            <th class="th">Entry Id</th>
            <th class="th">Calories</th>
            <th class="th">Serving</th>
            <th class="th">Type</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="">
            <td>sample</td>
            <td>500</td>
            <td>2</td>
            <td>Breakfast</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="newFood">
      <h1>
        Add item to logbook
      </h1>

      <input v-model="entryId" placeholder="entry id">
      <br />
      <input v-model="calories" placeholder="calories">
      <br />
      <input v-model="serving" placeholder="serving">
      <br />
      <select v-model="mealType" placeholder="Meal Type">
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
      <br />
      <button @click="addToLogbook(entryId, calories, serving, mealType)" name="addButton">Add to Logbook</button>
      <br />
      <p>{{ message }}</p>
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
