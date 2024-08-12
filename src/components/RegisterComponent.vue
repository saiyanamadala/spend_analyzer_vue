<template>
  <div class="parent">
    <div class="error-msg" v-if="user.errorCompute">
      <span>
        {{ user.errorMsg }}
      </span>
    </div>
    <div class="container">
      <label>Username</label>
      <input v-model="user.newUser.username" type="text" name="username" id="username" />
      <br />
      <label>Enter Password</label>
      <input v-model="user.newUser.password" type="password" name="password" id="password1" />
      <br />
      <label>Re-enter Password</label>
      <input v-model="user.tempPassword" type="password" name="password" id="password2" />
      <br />
      <button @click="user.registerUser" :disabled="user.errorCompute">Register</button>
      <br />
      <span>Already have an account? <RouterLink to="/">Login</RouterLink></span>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const user = useUserStore()
</script>

<style lang="scss" scoped>
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

.container {
  display: grid;
  justify-content: center;
  align-items: center;

  input {
    padding: 5px 5px;
    height: 40px;
    width: 300px;
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

  span {
    text-align: center;
  }
}
</style>
