<template>
  <div class="modal-backdrop">
    <Loader v-if="isLoading" />
    <div v-else class="modal">
      <div class="modal-header">
        <h1 class="text-header">{{textHeader || transaction.title}}</h1>
        <img @click="onClick" class="button-close-modal" src="@/assets/closed.png" alt="Botão de fechar">
      </div>
      <div class="container-progress-bar">
        <div class="progress-bar">
          <div class="state-progress-bar" :style="'width:' + `${progressBarStatus}`+'%'"></div>
        </div>
        <div class="subtitle-progress-bar">
          <h5>Solicitada</h5>
          <h5>Processando</h5>
          <h5>Concluída</h5>
        </div>
      </div>
      <div class="container-from-to">
        <div class="from">
          <h3>Transferindo de</h3>
          <img src="@/assets/lines.png">
          <div class="from-to-data">
            <h6>{{transaction.from}}</h6>
            <h6>{{transaction.amount | moneyFormat}}</h6>
          </div>
        </div>
        <div class="to">
          <h3>Para</h3>
          <img src="@/assets/lines.png">
          <div class="from-to-data">
            <h6>{{transaction.to}}</h6>
            <h6>{{transaction.amount | moneyFormat}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {ITransactions} from "@/modules/transactions/interfaces/ITransactions"
import { moneyFormat } from '@/helpers/moneyFormat'
import transactionSingleton from '@/modules/transactions/services'
import Loader from '@/modules/transactions/components/Loader.vue'

@Component({
  components: {
    Loader,
  },
  filters: {
    moneyFormat
  },
})
export default class Modal extends Vue {
  public transaction = {} as ITransactions
  public progressBarStatus!: number
  private isLoading = false

  @Prop({type: String, required: true})
  readonly idTransaction!: string

  @Prop({type: String, required: false})
  readonly textHeader?: string

  @Prop({type: Function, required: true})
  readonly onClick!: () => void

  async getSelectedTransaction() {
    this.isLoading = true
    try {
      this.transaction = await transactionSingleton.getTransaction(this.idTransaction)
      this.setProgressBarStatus()
    } catch (error) {
      alert('Não foi possível buscar a transação específica.\n\nTente novamente daqui alguns instantes!')
      this.onClick()
    } finally {
      this.isLoading = false
    }
  }

  setProgressBarStatus(): void {
    const status: { [string: string]: number } = {
      created: 10,
      processing: 50,
      processed: 100,
    };

    this.progressBarStatus = status[this.transaction.status];
  }

  created() {
    this.getSelectedTransaction()
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  position: absolute;
  width: 40%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(236, 236, 236);
  font-family: 'Roboto Condensed', sans-serif;
}
.modal-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.text-header {
  text-align: center;
  justify-self: center;
  grid-column-start: 1;
  grid-column-end: 3;
}
.button-close-modal {
  cursor: pointer;
  margin: 5px;
  width: 20px;
  justify-self: end;
  grid-column-start: 3;
  grid-column-end: 3;
}
.container-progress-bar {
  width: 80%;
  margin: auto;
}
.progress-bar {
  border: 1px solid black;
  background-color: white;
  border-radius: 13px;
  padding: 3px;
}
.state-progress-bar {
  height: 1rem;
  background-color: #e02b57;
  border-radius: 10px;
}
.subtitle-progress-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
h6 {
  margin-top: 0.1rem;
  font-size: 0.83em;
  font-weight: bold;
}
h5 {
  margin-top: 0.6rem;
}
h3 {
  margin-top: 0.6rem;
  margin-bottom: 0;
}
.container-from-to {
  width: 80%;
  margin: auto;
}
.from {
  display: flex;
  flex-direction: column;
}
.to {
  display: flex;
  flex-direction: column;
}
.from-to-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>