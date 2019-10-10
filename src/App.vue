yar<template>
  <div id="app">
    <img src="https://vuejs.org/images/logo.png" style="height: 200px;">
    <h1>vue-dropdowns</h1>
    <a href="https://github.com/mikerodham/vue-dropdowns">https://github.com/mikerodham/vue-dropdowns</a>
    <p>A prettier way to display select boxes</p>

    <dropdown :options="arrayOfObjects" :selected="selectedObject" v-on:updateOption="updateSelected"></dropdown>

  </div>
</template>

<script>
import dropdown from 'vue-dropdowns';


export default {
  name: 'app',
  data () {
    return {
      arrayOfObjects: [
        {id: 1, name: 'First Option'},
        {id: 2, name: 'Second Option'},
        {id: 3, name: 'Third Option'},
      ],
      selectedObject: {},
    }
  },
  components: {
    'dropdown': dropdown,
  },
  methods: {
    updateSelected(payload) {
      this.selectedObject = payload;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
