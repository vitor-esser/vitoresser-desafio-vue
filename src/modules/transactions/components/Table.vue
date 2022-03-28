<template>
  <div>
    <Loader v-if="isLoading" />
    <table v-else class="table-transactions">
      <tr>
        <th>Título</th>
        <th>Descrição</th>
        <th>Status</th>
        <th>Valor</th>
        <th>Visualizar</th>
      </tr>
      <tr v-for="transaction in auxTransactions" :key="transaction.id">
        <td>{{ transaction.title }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.status }}</td>
        <td>{{ transaction.amount | moneyFormat }}</td>
        <td>
          <Button
            text="Ver Transação"
            :onClick="() => passIdTransaction(transaction.id)"
          />
        </td>
      </tr>
    </table>
    <div v-if="auxTransactions.length === 0 && !isLoading">
      <p class="no-transactions">Não foi encontrada nenhuma transação!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { moneyFormat } from "@/helpers/moneyFormat";
import Button from "@/modules/transactions/components/Button.vue";
import Loader from "@/modules/transactions/components/Loader.vue";
import { ITransactions } from "@/modules/transactions/interfaces/ITransactions";

import { getModule } from 'vuex-module-decorators';
import { TransactionsModule } from '@/store/modules/transactions'

@Component({
  filters: {
    moneyFormat,
  },
  components: {
    Button,
    Loader,
  },
})
export default class Table extends Vue {
	public transactionsModule = getModule(TransactionsModule, this.$store)

  private transactions: ITransactions[] | undefined = []
  public auxTransactions: ITransactions[] | undefined = []
  public isLoading = false

  @Prop({type: String, required: true})
  readonly selectValue!: string

  @Prop({type: String, required: true})
  readonly inputValue!: string

  @Watch('inputValue')
  onInputValueChanged() {
    this.filter()
  }

  @Watch('selectValue')
  onSelectValueChanged() {
    this.filter()
  }

  filter(){
    this.auxTransactions = this.transactions
    this.isLoading = true

    if (this.inputValue != '' && this.auxTransactions) {
      this.auxTransactions = this.auxTransactions.filter(element => {
        return element.title.toUpperCase().match(new RegExp(this.inputValue.toUpperCase())) ||
          element.description.toUpperCase().match(new RegExp(this.inputValue.toUpperCase()))
      })
    }

    if (this.selectValue != 'all' && this.auxTransactions) {
      this.auxTransactions = this.auxTransactions.filter(element => {
        return element.status == this.selectValue
      })
    }

    this.isLoading = false
  }

  async getAllTransactions() {
		this.isLoading = true
    try {
			this.transactions = await this.transactionsModule.getAllTransactions()
      this.auxTransactions = this.transactions
    } catch (error) {
      alert('Não foi possível buscar as transações.\n\nTente novamente daqui alguns instantes!')
    } finally {
      this.isLoading = false
    }
  }

  passIdTransaction(id: string) {
    this.$emit("id-transaction", id);
  }

  created() {
		this.getAllTransactions()
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap");
.table-transactions {
  margin-top: 2rem;
}

table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid #ddd;
  font-family: "Roboto Condensed", sans-serif;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.no-transactions {
  font-family: "Roboto Condensed", sans-serif;
  text-align: center;
  font-weight: bold;
  margin-top: 3rem;
}
</style>