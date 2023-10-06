<script lang="ts">
import CreateRecept from "@/components/CreateRecept.vue";
import MainNavbar from "@/components/MainNavbar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { CreateRecept, MainNavbar },
});
</script>
<template>
  <main-navbar />
  <create-recept />
</template>
