<template>
  <div>
    <button class="button-transaction">
      Ver Transação
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {}
</script>

<style scoped>
.button-transaction {
  text-align: center;
  cursor: pointer;
  font-size: 0.8rem;
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