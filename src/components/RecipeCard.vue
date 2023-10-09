<script lang="ts" setup>
import { ref } from "vue";
let show = ref(false);

const showList = () => {
  console.log(show.value);
  show.value = !show.value;
};

let showModalDelete = ref(false);
let showModalEdit = ref(false);

console.log(showModalEdit);
console.log(showModalDelete);
</script>
<template>
  <div
    class="card text-gray-100 bg-neutral-800 w-fit rounded-[10px] max-w-[303px] md:max-w-[315px] max-h-[496px] w-[315px] border border-solid border-neutral-700 cursor-pointer transition-all ease-in hover:border-neutral-500"
  >
    <div class="w-[315px] h-[231px] max-w-[301px] md:max-w-[312px]">
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
        <div class="relative">
          <div class="flex items-center gap-1 text-sm mt-1">
            <span>Ингредиенты:</span>
            <button @click="showList()">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                :class="show ? 'rotate-180' : 'rotate-0'"
                class="transition-all ease-in"
              >
                <path
                  d="M12.1861 4.99313L7.50045 9.56063L2.81483 4.99313C2.73111 4.91136 2.61873 4.86558 2.5017 4.86558C2.38468 4.86558 2.27229 4.91136 2.18858 4.99313C2.14804 5.03284 2.11584 5.08025 2.09385 5.13257C2.07187 5.18488 2.06055 5.24106 2.06055 5.29781C2.06055 5.35456 2.07187 5.41074 2.09385 5.46306C2.11584 5.51538 2.14804 5.56278 2.18858 5.6025L7.17327 10.4625C7.2608 10.5478 7.37821 10.5956 7.50045 10.5956C7.6227 10.5956 7.7401 10.5478 7.82764 10.4625L12.8123 5.60344C12.8532 5.56369 12.8856 5.51617 12.9078 5.46368C12.9299 5.41119 12.9413 5.35479 12.9413 5.29781C12.9413 5.24084 12.9299 5.18444 12.9078 5.13195C12.8856 5.07946 12.8532 5.03193 12.8123 4.99219C12.7286 4.91042 12.6162 4.86464 12.4992 4.86464C12.3822 4.86464 12.2698 4.91042 12.1861 4.99219V4.99313Z"
                  fill="#FFFFFF"
                />
              </svg>
            </button>
          </div>
          <div v-if="show">
            <ul
              class="absolute text-xs bg-neutral-700 mt-0.5 top-5 left-24 p-2 leading-5 rounded w-fit"
            >
              <li>Сахар</li>
              <li>Пшеничная мука</li>
              <li>Гашенная сода</li>
              <li>Растительное масло</li>
              <li>Куриное яйцо</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-5 gap-2">
        <button
          class="w=[100%] py-1 bg-sky-500 text-black rounded-[40px] transition-all ease-out hover:bg-sky-400"
          @click.stop="$emit('showModalEdit')"
        >
          Редактировать
        </button>
        <button
          class="w=[100%] py-1 bg-red-500 text-white rounded-[40px] transition-all ease-out hover:bg-red-600"
          @click.stop="$emit('showModalDelete')"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>
