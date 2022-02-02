<template>
  <input id="input-search" type="text">
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Input extends Vue {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
#input-search {
  font-size: 1rem;
  font-family: 'Roboto Condensed', sans-serif;
  border-width: 1px;
  border-style: solid;
  border-color: var(--accent);
  border-radius: 5px;
  text-align: left;
  outline: transparent;
  transition: border-color calc(var(--transition, 0.2) * 1s) ease;
}
</style>