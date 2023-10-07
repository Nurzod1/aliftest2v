<template>
  <div>
    <main-navbar />
    <list-filter />
    <div
      class="container my-5 sm:my-12 grid justify-items-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-1 gap-[40px]"
    >
      <recipe-card />
      <recipe-card />
      <recipe-card />
      <recipe-card />
      <recipe-card />
      <recipe-card />
      <recipe-card />
      <recipe-card />
    </div>
  </div>
</template>

<script lang="ts">
import ListFilter from "@/components/ListFilter.vue";
import MainNavbar from "@/components/MainNavbar.vue";
import RecipeCard from "@/components/RecipeCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MainNavbar, ListFilter, RecipeCard },
  name: "HomeView",
});
</script>
