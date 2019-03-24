
<template>
    <div id="login">
    <div class="login">
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="username">
                <label htmlFor="username">Username</label>
                <input type="text" onkeypress="this.style.width = ((this.value.length + 5) * 8) + 'px';" v-model="loginUsername" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !loginUsername" class="invalid-feedback">Username is required</div>
            </div>
            <div class="password">
                <label htmlFor="password">Password</label>
                <input type="password" onkeypress="this.style.width = ((this.value.length + 5) * 8) + 'px';" v-model="loginPassword" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !loginPassword" class="invalid-feedback">Password is required</div>
            </div>
            <div class="submit">
                <button v-on:click="loginFunc(loginUsername,loginPassword)" style="position: relative ;  margin-top: 25px;">Login</button>
                <router-link to="/register"><b>Register</b></router-link>
            </div>
        </form>
    </div>
    </div>
</template>

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
