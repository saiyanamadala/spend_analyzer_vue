<template>
  <!-- <TitleComponent /> -->
  <div class="parent">
    <div class="error-msg" v-if="user.loginErrorMsg != ''">
      <span>
        {{ user.loginErrorMsg }}
      </span>
    </div>
    <div class="container">
      <div class="login_div">
        <label>Username</label>
        <input v-model="user.loginUser.username" type="text" name="username" id="username" />
        <br />
        <label>Password</label>
        <input v-model="user.loginUser.password" type="password" name="password" id="password" />
        <br />
        <button @click="user.handleLogin">Login</button>
        <p>Not registered? - <RouterLink to="/register">Register Now</RouterLink></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const user = useUserStore()
</script>

<style lang="scss">
.parent {
  display: grid;
  justify-content: center;
}

.error-msg {
  background-color: lightcoral;
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  width: 300px;
}

.login_div {
  display: grid;
  justify-content: center;
  align-items: center;

  input {
    width: 200px;
    height: 30px;
    padding: 5px 5px;
  }

  label {
    text-align: center;
    font-size: 20px;
  }

  button {
    font-size: 20px;
    height: 40px;

    &:hover {
      background-color: black;
      color: white;
    }
  }

  p {
    margin-top: 10px;
  }
}
</style>
