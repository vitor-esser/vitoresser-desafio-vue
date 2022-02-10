<template>
  <table class="table-transactions">
      <tr>
        <th>Título</th>
        <th>Descrição</th>
        <th>Status</th>
        <th>Valor</th>
        <th>Visualizar</th>
      </tr>
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td>{{transaction.title}}</td>
        <td>{{transaction.description}}</td>
        <td>{{transaction.status}}</td>
        <td>{{transaction.amount | moneyFormat}}</td>
        <td><Button text="Ver Transação" :onClick="() => passIdTransaction(transaction.id)" /></td>
      </tr>
  </table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { moneyFormat } from '@/helpers/moneyFormat'
import Button from '@/modules/transactions/components/Button.vue'
import {ITransactions} from "@/modules/transactions/interfaces/ITransactions";
import transactionSingleton from '@/modules/transactions/services'

@Component({
  filters: {
    moneyFormat
  },
  components: {
    Button
  }
})
export default class Table extends Vue {
  public transactions: ITransactions[] = []

  async getAllTransactions() {
    this.transactions = await transactionSingleton.getAllTransactions()
  }

  passIdTransaction(id: string) {
    this.$emit('id-transaction', id)
  }
  
  created() {
    this.getAllTransactions()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
.table-transactions {
  margin-top: 2rem;
}

table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-family: 'Roboto Condensed', sans-serif;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2
}

</style>