<template>
  <div>
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
          <td><Button @click.native="openModalTransaction(transaction.id)" /></td>
        </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { transactions } from '@/modules/transactions/mocks/transactions'
import { moneyFormat } from '@/helpers/moneyFormat'
import Button from '@/modules/transactions/components/Button.vue'

@Component({
  filters: {
    moneyFormat
  },
  components: {
    Button
  }
})
export default class Table extends Vue {
  public transactions = transactions

  openModalTransaction(id: string) {
    alert(id)
  }
}
</script>

<style scoped>
.table-transactions {
  margin-top: 2rem;
}

table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2
}

</style>