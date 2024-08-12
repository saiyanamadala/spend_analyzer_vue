import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('users', () => {
  const users = reactive(JSON.parse(localStorage.getItem('registeredUsers')) || [])

  //const users = reactive(localStorage.getItem('registeredUsers') ? JSON.parse(localStorage.getItem('registeredUsers')) : [])

  const newUser = reactive({
    username: '',
    password: ''
  })

  const loginUser = reactive({
    username: '',
    password: ''
  })

  const tempPassword = ref('')

  const errorMsg = ref('')

  const loginErrorMsg = ref('')

  const router = useRouter()

  const handleLogin = () => {
    if (users.length == 0) {
      loginErrorMsg.value = "Please register before you login"
    }
    else {
      users.forEach(item => {
        if (item.username === loginUser.username && item.password === loginUser.password) {
          loginErrorMsg.value = ''
          router.push({ name: "Home" })
        }
        else {
          loginErrorMsg.value = "User not found"
        }
      })
    }
  }

  const registerUser = () => {
    if (!errorCompute.value) {
      users.push({ ...newUser })
      localStorage.setItem('registeredUsers', JSON.stringify(users))
      newUser.username = ''
      newUser.password = ''
      tempPassword.value = ''
      router.push({ name: 'Login' })
    }
  }

  const errorCompute = computed(() => {
    if (newUser.username.length > 3 && newUser.password.length > 3 && tempPassword.value.length > 3) {
      if (newUser.password === tempPassword.value) {
        return false
      }
      else {
        errorMsg.value = "Passwords did not match"
        return true
      }
    }
    else {
      errorMsg.value = "Username and Password should be atleast 4 characters"
      return true
    }
  })

  return { users, newUser, tempPassword, errorMsg, errorCompute, loginUser, loginErrorMsg, handleLogin, registerUser }
})
