<template>
  <div>
    <Menu />
    <div class="container-transactions">
      <div class="row-filters">
        <Input />
        <Select />
      </div>
      <Table />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu/Menu.vue'
import Input from '@/modules/transactions/components/Input.vue'
import Select from '@/modules/transactions/components/Select.vue'
import Table from '@/modules/transactions/components/Table.vue'

@Component({
  components: {
    Menu,
    Input,
    Select,
    Table,
  },
})
export default class Transactions extends Vue {

}
</script>

<style scoped>
.container-transactions {
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 5rem 10rem;
  max-width: 90%;
}
.row-filters {
  display: flex;
  flex-direction: row;
}
</style>