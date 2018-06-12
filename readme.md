# vue-dropdowns
A prettier way to display select boxes if you're selecting objects if you're using a v-for on objects.

No special dependencies, no jquery, no bootstrap, just VueJS and CSS goodness.

# Demo
 - [Demo - https://mikerodham.github.io/vue-dropdowns/](https://mikerodham.github.io/vue-dropdowns/)

# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.0.0`

# Installation

```shell
$ npm install vue-dropdowns
// OR
$ yarn add vue-dropdowns
```

# Usage

```html
<dropdown :options="arrayOfObjects" 
          :selected="object" 
          v-on:updateOption="methodToRunOnSelect" 
          :placeholder="'Select an Item'">
</dropdown>

<script>
import dropdown from 'vue-dropdowns';

export default {
        data() {
          return {
            arrayOfObjects: [],
            object: {
              name: 'Object Name',
            }
          }
        },

        components: {
            'dropdown': dropdown,
        },

        methods: {
          methodToRunOnSelect(payload) {
            this.object = payload;
          }
        }
      }
</script>

```

# License

[The MIT License](http://opensource.org/licenses/MIT)
