<template>
  <section
    class="bg-gray-900 w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl"
  >
    <!-- FAtura Bilgileri -->
    <heading title="Fatura Bilgileri"></heading>
    <contactSection :contact="state.contact"></contactSection>
    <div class="mt-5">
      <heading title="Fatura Kalemleri"></heading>
      <invoice-items
        :items="state.items"
        :AddInvoiceItem="AddInvoiceItem"
      ></invoice-items>
    </div>
    <!-- Summary -->
    <invoice-summary :items="state.items"></invoice-summary>

    <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
    <div class="actionbar text-right my-5">
      <button @click="onSubmit" class="purple-button">Kaydet</button>
    </div>
  </section>
</template>
<script setup>
import invoiceItems from "./invoiceItems.vue";
import invoiceSummary from "./invoiceSummary.vue";
import contactSection from "./contactSection.vue";

import { reactive, provide } from "vue";

const props = defineProps({saveInvoice : Function});
const state = reactive({
  contact: {
    contact_name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  },
  items: [],
});

const AddInvoiceItem = () => {
  state.items.push({
    id: new Date().getTime(),
    name: null,
    qty: null,
    unit_price: 0.0,
    total_price: 0.0,
  });
};

const DeleteInvoiceItem = (invoiceItem) => {
  state.items = state.items.filter(x=>x.id != invoiceItem.id)
}

provide("DeleteInvoiceItem", DeleteInvoiceItem);

const onSubmit = () => {
  props.saveInvoice({... state, created_at: new Date(), id: new Date().getTime()})
  state.contact = {
    contact_name: null,
    email: null,
    city: null,
    country: null,
    zipcode: null,
  };
  state.items = [];
}
</script>