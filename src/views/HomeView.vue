<template>
  <div>
    <main-navbar />
  </div>
</template>

<script lang="ts">
import MainNavbar from "@/components/MainNavbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MainNavbar },
  name: "HomeView",
});
</script>
