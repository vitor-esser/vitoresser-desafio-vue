<template>
  <div>
    <input id="input-search" type="text">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Input extends Vue {

}
</script>

<style scoped>
#input-search {
  font-size: 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--accent);
  border-radius: 5px;
  text-align: left;
  outline: transparent;
  width: 100%;
  height: 100%;
  transition: border-color calc(var(--transition, 0.2) * 1s) ease;
}
</style>