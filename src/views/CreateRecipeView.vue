<script lang="ts">
import CreateRecipe from "@/components/CreateRecipe.vue";
import MainNavbar from "@/components/MainNavbar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { CreateRecipe, MainNavbar },
});
</script>
<template>
  <main-navbar />
  <create-recipe />
</template>
