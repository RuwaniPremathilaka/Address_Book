<template>
  <div
    class="container"
  >
    <AddNewCustomer />
    <CustomerSummary />
    <AllCustomers />
  </div>
</template>
<script>
import CustomerSummary from "../views/customer/CustomerSummary.vue";
import AddNewCustomer from "../views/customer/AddNewCustomer.vue";
import AllCustomers from "../views/customer/AllCustomers.vue";

export default {
  components:
    {
      CustomerSummary,
      AddNewCustomer,
      AllCustomers,
    },
  data() {
    return {};
  },
};
</script>
