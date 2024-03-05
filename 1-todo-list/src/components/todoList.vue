<template>
  <section class="mt-4">
    <h3 class="text-center text-2xl">TodoList</h3>
    <todo-list-item v-for="todoItem in todoList" :key="todoItem.id" :todo="todoItem"></todo-list-item>

    <summary-component></summary-component>
  </section>
</template>
<script>
import todoListItem from './todoListItem.vue';
import Summary from "./Summary.vue";
import {computed} from 'vue';

export default {
  components: {
    "todo-list-item": todoListItem,
    "summary-component": Summary,
  },
  props:{
    todoList: Array,
  },
  setup(props){
    const todoLength = computed(() => props.todoList.length)

    return {
        todoLength,
    }
  }
};
</script>