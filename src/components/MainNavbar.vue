<script lang="ts" setup></script>
<template>
  <div class="bg-neutral-950 h-36 md:h-52">
    <div class="container">
      <div class="flex justify-center text-white gap-5 pt-5 md:pt-10 pb-3">
        <img src="@/assets/Logo.png" class="max-h-12" />
      </div>
      <div
        class="flex justify-center gap-4 text-violet-600 text-sm md:text-base"
      >
        <router-link to="/">Список рецептов</router-link>
        <router-link to="/create-recipe-view">Добавить рецепт</router-link>
      </div>
    </div>
  </div>
</template>
