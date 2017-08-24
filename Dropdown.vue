<template>
    <div class="btn-group">
        <a href="javascript:void(0)" class="form-control dropdown-toggle" data-toggle="dropdown" aria-expanded="false"  v-if="selectedOption !== null">
            {{ selectedOption.name }}
            <span class="caret"></span>
            <div class="ripple-container"></div>
        </a>

        <a href="javascript:void(0)" class="form-control dropdown-toggle" data-toggle="dropdown" aria-expanded="false" v-if="selectedOption === null">
            Please Select an Item
            <span class="caret"></span>
            <div class="ripple-container"></div>
        </a>
        <ul class="dropdown-menu">
            <li v-for="option in options">
                <a href="javascript:void(0)" @click="updateOption(option)">
                    {{ option.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedOption: {},
            }
        },
        props: {
            options: {
                type: [Array, Object]
            },
            selected: {},
        },

        mounted() {
            this.selectedOption = this.selected;
        },

        methods: {
            updateOption(option) {
                this.selectedOption = option;
                this.$emit('updateOption', this.selectedOption);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn-group {
        width: 100%;
        a {
            &:hover {
                text-decoration: none;
            }
        }
    }

    .dropdown-toggle {
        color: #636b6f;
        text-transform: none;
        font-weight: 300;
    }

    .dropdown-menu > li > a {
        padding: 10px 30px;

        &:hover {
            background: #efefef;
            color: #409FCB;
        }
    }

    .caret {
        float: right;
    }
</style>
