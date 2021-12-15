# vue-dropdowns
A better way to handle `v-for` on objects.

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
<dropdown class="my-dropdown-toggle"
          :options="arrayOfObjects" 
          :selected="object" 
          v-on:updateOption="methodToRunOnSelect" 
          :placeholder="'Select an Item'"
          :closeOnOutsideClick="boolean">
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

<style scoped>
.my-dropdown-toggle {
  border-radius: 5px;

  ::v-deep .dropdown-toggle {
    color: tomato;
    font-size: 25px;
    font-weight: 800;
  }

  ::v-deep .dropdown-toggle-placeholder {
    color: #c4c4c4;
  }
}
</style>

```

# Default values of props
| Property            |  Type   |    Default value |
|---------------------|:-------:|-----------------:|
| closeOnOutsideClick | boolean |             true |
| placeholder         | string  | 'Select an Item' |
| disabled            | boolean |            false |

# License

[The MIT License](http://opensource.org/licenses/MIT)
