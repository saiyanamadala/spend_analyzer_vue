<template>
  <div class="spends-add">
    <label>Description</label>
    <input v-model="spend.newSpend.description" type="text" name="description" id="description" />
    <label>Transaction Type</label>
    <select v-model="spend.newSpend.type" id="transaction-type">
      <option value="credit">Credit</option>
      <option value="debit">Debit</option>
    </select>
    <label>Amount</label>
    <input v-model="spend.newSpend.amount" type="number" step="0.01" min="0" />
    <button class="add" @click="spend.addExpense">+Add</button>
  </div>
</template>

<script setup>
import { useSpendStore } from '@/stores/spends.ts'

const spend = useSpendStore()
</script>

<style lang="scss" scoped>
.spends-add {
  display: grid;
  gap: 5px;

  .add {
    background-color: green;
    color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    border: none;
  }

  label {
    text-align: center;
  }

  input,
  select {
    padding: 5px 5px;
  }
}
</style>
