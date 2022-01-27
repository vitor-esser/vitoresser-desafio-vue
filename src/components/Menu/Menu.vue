<template>
  <div class="menu">
    <img class="logo-warren" alt="Logo da Warren" src="@/assets/warren-grey-logo.svg">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Menu extends Vue {

}
</script>

<style scoped>
.menu {
  background-color: #e02b57;
  height: 6rem;
}

.logo-warren {
  margin: 2rem 4rem;
}
</style>
