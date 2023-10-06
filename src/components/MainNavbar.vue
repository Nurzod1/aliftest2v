<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<template>
  <div class="bg-neutral-950 h-52">
    <div class="container">
      <div class="flex justify-center text-white gap-5 pt-10 pb-3">
        <img src="@/assets/Logo.png" class="max-h-12" />
      </div>
      <div class="flex justify-center gap-4 text-violet-600">
        <router-link to="/">Список рецептов</router-link>
        <router-link to="/create-recept-view">Добавить рецепт</router-link>
      </div>
    </div>
  </div>
</template>
