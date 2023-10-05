<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>
<template>
  <div
    class="card text-gray-100 bg-neutral-800 w-fit rounded-[10px] max-w-[315px] max-h-[496px] w-[315px] border border-solid border-white border-neutral-700 cursor-pointer transition-all ease-in hover:border-neutral-500"
  >
    <div class="w-[315px] h-[231px] max-w-[313px]">
      <img class="w-full h-full" src="@/assets/img/Rectangle.png" alt="" />
    </div>
    <div class="px-2.5 py-4">
      <div class="flex gap-1 items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
            stroke="#AAAAAA"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M8.89453 4.46718V9.16894H12.7198"
            stroke="#AAAAAA"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
        <p class="text-xs">20 минут</p>
      </div>
      <div>
        <p class="mt-1 text-lg font-bold">Американские блины</p>
        <p class="text-sm mt-1">Ингредиенты:</p>
        <span class="line-clamp-2 text-xs mt-0.5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          distinctio? Eaque iure iusto fugit dolorem veniam.
        </span>
      </div>
      <div class="flex flex-col mt-5 gap-2">
        <button
          class="w=[100%] py-1 bg-sky-500 text-black rounded-[40px] transition-all ease-out hover:bg-sky-400"
        >
          Редактировать
        </button>
        <button
          class="w=[100%] py-1 bg-red-500 text-white rounded-[40px] transition-all ease-out hover:bg-red-600"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>
