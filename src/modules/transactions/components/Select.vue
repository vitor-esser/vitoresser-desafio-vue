<template>
  <div class="select-div">
    <div class="select-dropdown">
      <select>
        <option value="Option 1">Processando</option>
        <option value="Option 2">Solicitada</option>
        <option value="Option 3">Concluída</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Select extends Vue {}
</script>

<style scoped>
.select-div {
  margin-left: 40px;
  height: 100%;
}

.select-dropdown,
.select-dropdown * {
  padding: 5px 0px;
  position: relative;
  box-sizing: border-box;
}
.select-dropdown {
  position: relative;
  background-color: #ffffff;
  border-style: solid;
  border-color: var(--accent);
  border-radius: 5px;
  border-width: 1px;
}
.select-dropdown select {
  font-size: 1rem;
  font-weight: normal;
  max-width: 100%;
  padding: 8px 24px 8px 10px;
  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.select-dropdown select:active,
.select-dropdown select:focus {
  outline: none;
  box-shadow: none;
}
.select-dropdown:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 8px;
  width: 0;
  height: 0;
  margin-top: -2px;
  border-top: 5px solid #aaa;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
}
</style>