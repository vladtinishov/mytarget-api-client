<template>
  <div id="app">
    <SelectType />
     <router-view></router-view>
  </div>
</template>

<script>
import SelectType from "@/components/SelectType"

export default {
  name: "App",
  components: {
    SelectType,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
