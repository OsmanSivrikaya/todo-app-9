<template>
  <div
    class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center"
  >
    <appSidebar :invoiceList="invoiceList"></appSidebar>
    <invoice-content :saveInvoice="saveInvoice"></invoice-content>
  </div>
</template>
<script setup>
import {ref} from "vue";
import appSidebar from "./components/appSidebar.vue";
import invoiceContent from "./components/invoiceContent.vue";

const invoiceList = ref([]);

const saveInvoice = (invoice) => {
  console.log(invoice);
  invoiceList.value.push(invoice);
}
</script> 