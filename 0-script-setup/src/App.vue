<template>
  <div>
    <h3>{{ title }}</h3>
    <input type="text" v-model="title" />
    <button @click="inc">{{ counter }}</button>
    <hr />
    <oddOrEven :counter="counter" @odd-event="alertMe"></oddOrEven>

    <hr />

    <h1>User App</h1>
    <input type="text" v-model="state.personal.name" />
    <input type="text" v-model="state.personal.lname" />
    {{ state.personal }}
  </div>
</template>
<script setup>
//! beforeCreate created ve data() yerine geçiyor
import { ref, reactive, watch } from "vue";
import oddOrEven from "./components/oddOrEven.vue";
import Utils from "./composables/utils.js";

const { title, counter, inc, alertMe } = Utils();
// obje şeklinde bir datanız varsa tek tek refle tanımlamak yerine 
//const name = ref("");
//const lname = ref("");

// reactive kullanabiliriz
const state = reactive({
  personal:{
    name: null,
    lname: null
  },
  itemList:[]
});

watch(() => JSON.parse(JSON.stringify(state.personal)), (newPersonal, oldPersonal) => {
  console.log(oldPersonal)
  console.log(newPersonal)
})

</script>