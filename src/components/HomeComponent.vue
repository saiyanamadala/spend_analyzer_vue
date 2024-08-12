<template>
  <div class="spends">
    <div class="add">
      <button @click="showAddComponent" :class="classButton">{{ buttonContent }}</button>
      <div v-if="showAdd">
        <AddSpend />
      </div>
    </div>
    <div class="spends-list" v-for="expense in spends.spends" :key="expense.id">
      <span>{{ expense.id }}</span>
      <span>{{ expense.description }}</span>
      <span :class="expense.type">${{ expense.amount }}</span>
    </div>
    <div class="spends-list">
      <span>Total spends</span>
      <span>${{ spends.total }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSpendStore } from '@/stores/spends'
import AddSpend from '@/components/AddSpend.vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const spends = useSpendStore()
const showAdd = ref(false)
const buttonContent = ref('+Add expense')
const classButton = ref('adding')
const router = useRouter()
const user = useUserStore()

const showAddComponent = () => {
  showAdd.value = !showAdd.value
  if (classButton.value === 'adding') {
    classButton.value = 'close'
    buttonContent.value = 'X close'
  } else {
    classButton.value = 'adding'
    buttonContent.value = '+Add expense'
  }
}

onMounted(() => {
  if (user.loginUser.username == '') {
    router.push({ name: 'Login' })
  }
})
</script>

<style lang="scss" scoped>
.spends {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-items: center;
  gap: 1px;

  &-list {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    width: 80%;
    border: 1px solid;
    height: 50px;
    background-color: rgb(230, 227, 227);
    padding: 10px;
    border: 1px solid #ccc;
  }
}

.add {
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr;

  button {
    color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    border: none;
  }

  .adding {
    background-color: green;
  }

  .close {
    background-color: red;
  }
}

.debit {
  color: red;
}

.credit {
  color: green;
}
</style>
