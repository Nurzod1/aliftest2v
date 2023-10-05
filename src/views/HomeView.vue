<template>
  <div>
    <main-navbar />
    <list-filter />
    <div class="container my-10 grid grid-cols-4 gap-x-1 gap-[40px]">
      <recept-card />
      <recept-card />
      <recept-card />
      <recept-card />
      <recept-card />
      <recept-card />
      <recept-card />
      <recept-card />
    </div>
  </div>
</template>

<script lang="ts">
import ListFilter from "@/components/ListFilter.vue";
import MainNavbar from "@/components/MainNavbar.vue";
import ReceptCard from "@/components/ReceptCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MainNavbar, ListFilter, ReceptCard },
  name: "HomeView",
});
</script>
