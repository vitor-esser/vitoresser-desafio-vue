<template>
  <button @click="onClick" class="button-transaction">
    {{text}}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop({type: String, required: true})
  private text!: ''

  @Prop({type: Function, required: true})
  private onClick!: () => any
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
.button-transaction {
  text-align: center;
  cursor: pointer;
  font-size: 0.9rem;
  font-family: 'Roboto Condensed', sans-serif;
  border-width: 1px;
  border-style: solid;
  border-color: var(--accent);
  border-radius: 5px;
  outline: transparent;
  width: 100%;
  height: 1.8rem;
  color: white;
  background-color: #e02b57;
}

.button-transaction:hover {
  background-color: #e44c72;
}
</style>