<template>
  <div class="select-div">
    <div class="select-dropdown">
      <select v-model="valueSelected">
        <option value="created">Solicitada</option>
        <option value="processing">Processando</option>
        <option value="processed">Concluída</option>
        <option value="all">Todas</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Emit } from "vue-property-decorator";

@Component
export default class Select extends Vue {
  public valueSelected = 'all'

  @Watch('valueSelected')
  onChildChanged(val: string, oldVal: string) {
    this.changeSelectValue(val)
  }
  
  @Emit()
  changeSelectValue(value: string) {
    return value 
  }
  
  created() {
    this.changeSelectValue(this.valueSelected)
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
.select-div {
  margin-left: 40px;
  height: 100%;
}

.select-dropdown,
.select-dropdown * {
  padding: 5px 0px;
  position: relative;
  box-sizing: border-box;
  font-family: 'Roboto Condensed', sans-serif;
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