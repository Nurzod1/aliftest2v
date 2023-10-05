<template>
  <div>
    <main-navbar />
    <list-filter />
  </div>
</template>

<script lang="ts">
import ListFilter from "@/components/ListFilter.vue";
import MainNavbar from "@/components/MainNavbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MainNavbar, ListFilter },
  name: "HomeView",
});
</script>
