<template>
  <div id="progress">
    <div class="sidenav">
      <router-link to="/app/myaccount">My Account</router-link>
      <router-link to="/app/logbook">Logbook</router-link>
      <router-link to="/app/progress" id="progress"><b><u>Progress</u></b></router-link>
      <router-link to="/" id="logout">Logout</router-link>
    </div>
    <div id="progress">
      <h1>
        Progress
      </h1>
      <h3 style="margin-top:50px;">
        Add Progress Entry
      </h3>
      <input v-model="newDate" placeholder="Date (yyyy-mm-dd)">
      <input v-model="newWeight" placeholder="New Weight">
      <br />
      <br />
      <button @click="addEntryToProgress(newWeight, newDate)" name="addButton">Add to Progress</button>
      <br />
      <br />
      <p>{{ progressMessage }}</p>
      <table>
        <thead>
        <tr id="header">
          <th class="th">Date</th>
          <th class="th">Weight</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(data, index) in progressEntries" :key='index' v-on:click="selectedWeight = data.weight;" v-bind:class="{selected: selectedWeight === (data,index)}">
          <td>{{data.date}}</td>
          <td>{{data.weight}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script src="../jsFiles/progress.js"></script>


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

  .selected {
    background-color: lightskyblue;
  }
  .foods {
    display: ;
  }
</style>
