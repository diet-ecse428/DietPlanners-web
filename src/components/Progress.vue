<template>
  <div id="progress">
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
    <div id="progress">
      <h1>
        Progress
      </h1>
      <h2 style="margin-top:50px;">
        Add Progress Entry
      </h2>
      <h5 style="background-color:powderblue; margin: 50px; color: red">{{ message }}</h5>
      <input v-model="newWeight" placeholder="New Weight (kg)">
      <br />
      <br />
      <button @click="addEntryToProgress(newWeight, newDate)" name="addButton">Add to Progress</button>
      <br />
      <br />
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
