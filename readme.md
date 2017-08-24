# vue-dropdown
A prettier way to display select boxes if you're selecting objects if you're using a v-for on objects.

# Requirements

- [Vue.js](https://github.com/yyx990803/vue) `^2.0.0`

# Installation

```shell
$ npm install vue-dropdowns
// OR
$ yarn add vue-dropdowns
```

# Usage

```html
<dropdown :options="arrayOfObjects" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>

<script>
export default {
        data() {
          return {
            arrayOfObjects: [],
            object: {
              name: 'Object Name',
            }
          }
        },

        methods: {
          methodToRunOnOptionUpdate(payload) {
            this.object = payload;
          }
        }
      }
</script>

```

# License

[The MIT License](http://opensource.org/licenses/MIT)
