<template>
  <div class="flex justify-between items-center even:bg-gray-600 px-2 p-1 mb-2">
    <label for="completed">
      <input type="checkbox" id="completed" class="mr-2" v-model="todo.completed" />
      <span class="text-lg">{{ todo.title}}</span>
    </label>
    <button class="bg-indigo-500 px-2 py-1 rounded-md active:bg-indigo-800">
      Sil
    </button>
  </div>
</template>
<script>
export default {
    props:{
        todo: Object,
    }
}
</script>