<template>
  <div class="w-screen h-screen bg-gray-400 pt-10">
    <div
      class="bg-gray-700 rounded-md shadow-md text-white w-1/3 mx-auto p-3 mt-10"
    >
      <add-section :AddTodo="AddTodo"></add-section>
      <todo-list :todoList="todoList" @delete-event="deleteItem"></todo-list>
    </div>
  </div>
</template>
<script>
import addSection from "./components/addSection.vue";
import todoList from "./components/todoList.vue";
import { ref } from "vue";
export default {
  components: {
    "add-section": addSection,
    "todo-list": todoList,
  },
  setup() {
    const todoList = ref([]);

    const AddTodo = (todoText) => {
      todoList.value.push({
        id: new Date().getTime(),
        title: todoText,
      });
    };

    const deleteItem = (todo) => {
      todoList.value = todoList.value.filter(x => x.id != todo.id);
    };

    return { todoList, AddTodo, deleteItem };
  },
};
</script>