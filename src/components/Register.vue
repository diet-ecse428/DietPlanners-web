<template>
  <div class="reg">
    <h3 style="background-color:powderblue; margin-top: 100px; color: red">{{ message }}</h3>
    <div id="form">
      <form @submit.prevent="handleSubmit">
         <h3 style="color: white">
            Register
          </h3>
            <div class="name">
                <input required id="name" type="text" v-model="name" placeholder="Name"/>
            </div>
            <div class="last">
                <input required id="last" type="text" v-model="last" placeholder="Lastname"/>
            </div>
            <div class="username">
                <input required id="username" type="text" v-model="username" placeholder="Username"/>
            </div>
            <div class="email">
                <input required id="email" type="text" v-model="email" placeholder="Email"/>
            </div>
            <div class="password">
                <input required id="password" type="text" v-model="password" placeholder="Password"/>
            </div>
            <div class="height">
                <input required id="height" type="text" v-model="height" placeholder="Height"/>
            </div>
            <div class="targetweight">
                <input required id="tweight" type="text" v-model="targetweight" placeholder="Target Weight"/>
            </div>
            <div class="targetdate">
                <input required id="tdate" type="text" v-model="targetdate" placeholder="Target Date (yyyy-mm-dd)"/>
            </div>
            <div class="startweight">
                <input required id="sweight" type="text" v-model="startweight" placeholder="Start Weight"/>
            </div>
            <div class="submit">
               <button id="btn" @click="addUserInfo(name, last, username, email, password, height, targetweight, targetdate, startweight)" name="addButton">Register</button>
               <router-link to="/"><b>HOME</b></router-link>
            </div>
      </form>
    </div>
  </div>
</template>

<script src="../jsFiles/register.js">
</script>

<style>

  .reg {
    padding: 30px;
    background: url('../assets/background.png') center/cover;

  }
  #message {
    color: red;
  }

  #form {
    margin: 100px;
  }
  input {
    margin: 5px;
  }

  #error {
    background-color: powderblue;
  }
</style>

