
<template>
    <div class="login">
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="username">
                <label for="username">Username</label>
                <input type="text" onkeypress="this.style.width = ((this.value.length + 5) * 8) + 'px';" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="password">
                <label htmlFor="password">Password</label>
                <input type="password" onkeypress="this.style.width = ((this.value.length + 5) * 8) + 'px';" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="submit">
                <button v-on:click="login" style="position: relative ;  margin-top: 25px;">Login</button>
                <router-link to="/register"><b>Register</b></router-link>
            </div>
        </form>
    </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    created () {
    },
    methods: {
        login: function (event) {
            this.$router.push('/app/myaccount')
        }
    }
}
</script>
<style scoped>
.login {
    /* background-color: blue; */
    height: 50vh; 
    width: 50vw;
    margin: 0 auto;

  /* color: white; */
}
/* .username {
    margin: 0 auto;
    text-align: center;

} */
input {
    margin: 0 auto;
    text-align: center;
}


</style>

