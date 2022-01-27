<template>
  <div>
    <Menu />
    <div class="row-filters">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/Menu/Menu.vue'

@Component({
  components: {
    Menu,
  },
})
export default class Transactions extends Vue {

}
</script>

<style scoped>
.row-filters {
  
}
</style>