import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import { useUserStore } from "./user";

export const useSpendStore = defineStore('spends', () => {

    const user = useUserStore()

    const spends = reactive([

    ])

    const newSpend = reactive({
        username: '',
        id: undefined,
        description: '',
        type: '',
        amount: 0
    })

    const addExpense = () => {
        newSpend.username = user.loginUser.username
        newSpend.id = spends.length > 0 ? Math.max(...spends.map(spend => spend.id)) + 1 : 1
        spends.push({ ...newSpend })
        newSpend.username = ''
        newSpend.id = undefined
        newSpend.description = ''
        newSpend.type = ''
        newSpend.amount = undefined

    }

    const total = computed(() => {
        let finalTotal = 0
        spends.forEach(item => {
            if (item.type == 'debit') {
                finalTotal += item.amount
            }
            else {
                finalTotal -= item.amount
            }
        })
        return (finalTotal)
    })

    return { spends, newSpend, total, addExpense }
})