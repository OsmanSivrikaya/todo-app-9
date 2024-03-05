<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" v-model="title">
    {{ titleLengMessage }}
    <button @click="onShow">Toggle</button>
    <p v-if="show">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio fugit odit
      architecto facere modi reiciendis, deserunt veritatis quidem doloribus
      aperiam, eius quibusdam maxime. Molestiae omnis odit quas, quis dolore
      numquam!
    </p>
    <hr>
    <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
    <hr>
    <input type="text" v-model="searchText">
    <p v-if="isTyping">Şu an yazıyor...</p>
  </div>
</template>
<script>
import Counter from './composables/Counter.js';
import Header from './composables/Header.js';
import Toggle from './composables/Toggle.js';
import Search from './composables/Search.js';
export default {
  setup() {
    

   const { title, titleLengMessage} = Header();
   const { show, onShow } = Toggle();
   const { counter, oddOrEven} = Counter();
   const { isTyping, searchText } = Search();

    return {
      title,
      show,
      onShow,
      titleLengMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping
    };
  },
};
</script>
