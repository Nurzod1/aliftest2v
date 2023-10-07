<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<template>
  <div class="container">
    <div class="text-white mt-[-21px] md:mt-[-28px]">
      <div class="flex justify-center gap-2">
        <input
          class="outline-none bg-neutral-800 h-10 md:h-14 w-[360px] md:w-[630px] rounded-lg border border-black border-solid placeholder-gray-600 px-5 transition-all ease-in focus:border-neutral-700"
          type="text"
          placeholder="Введите слово"
        />
        <button
          class="bg-sky-700 w-24 h-10 md:h-14 rounded-lg border border-black border-solid transition-all ease-in hover:bg-sky-600"
        >
          Поиск
        </button>
      </div>
      <div class="flex justify-center items-center mt-5 gap-5">
        <p class="text-sky-700 font-bold text-sm md:text-base">Сортировать</p>
        <select
          class="bg-neutral-800 outline-none filter-form__select py-1.5 px-2.5 rounded text-sm md:text-base"
        >
          <option>По дате создания</option>
          <option>По дате изменения</option>
        </select>
      </div>
    </div>
  </div>
</template>
