<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>
      VueDropdowns
    </h1>
    <VueDropdowns
      :options="options"
      :selected="selectedOption"
      @updateOption="onSelectOption"
    />
    <p>
      Selected option:
      <span>
        {{selectedOption}}
      </span>
    </p>

    <div>
      <h4>
        Options:
      </h4>
      <ul>
        <li v-for="option in options" :key="option.name">
          {{option}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueDropdowns from '../../Dropdown.vue';

export default {
  name: 'App',
  components: {
    VueDropdowns,
  },

  data() {
    return {
      selectedOption: {
        name: 'Option 1',
      },
      options: [
        {
          name: 'Option 1',
        },

        {
          name: 'Option 2',
        },

        {
          name: 'Option 3',
        },
      ],
    };
  },

  methods: {
    onSelectOption(selectedOption) {
      this.selectedOption = selectedOption;
    },
  },
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

ul {
  padding: 0;
}
</style>
