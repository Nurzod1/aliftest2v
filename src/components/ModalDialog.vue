<script lang="ts" setup>
import {
  computed,
  defineEmits,
  defineProps,
  onMounted,
  useSlots,
  watch,
} from "vue";

const props = defineProps({
  modelValue: Boolean,
  // size: {
  //   type: String,
  //   validator(value) {
  //     return ["large", "medium", "small"].includes(value as string);
  //   },
  //   default: "small",
  // },
});

const emit = defineEmits(["update:modelValue"]);
const slots = useSlots();

const isButtonsSlotExist = computed(() => {
  return !!slots.buttons;
});

function closeModal() {
  emit("update:modelValue", false);
}

function disableScroll() {
  const htmlEl = document.querySelector("html");
  if (htmlEl == null) {
    return;
  }
  if (props.modelValue) {
    htmlEl.classList.add("disabledY");
  } else {
    htmlEl.classList.remove("disabledY");
    htmlEl.style.paddingRight = "";
  }
}

const modalDialogClasses = computed(() => {
  let baseClasses =
    "fixed top-0 right-0 left-0 bottom-0 flex flex-col justify-center text-white transition-all ease-in opacity-0 pointer-events-none";
  if (props.modelValue) {
    baseClasses += " opacity-100 pointer-events-auto";
  }

  return baseClasses;
});

const modalDialogWrapperClasses = computed(() => {
  let baseClasses =
    "relative flex flex-col items-center justify-center pb-[20px] w-fit mx-2 md:px-[20px] bg-neutral-800 rounded-xl border border-neutral-700 shadow-[0 0 10px rgba(0, 0, 0, .2)] transition-all ease-in overflow-y-auto scale-0";

  if (props.modelValue) {
    baseClasses += " scale-100";
  }

  return baseClasses;
});

watch(
  () => props.modelValue,
  () => {
    disableScroll();
  }
);

onMounted(() => {
  disableScroll();
});
</script>

<template>
  <div :class="modalDialogClasses">
    <div
      class="fixed top-0 left-0 w-screen h-screen bg-[#0000001a]"
      @click="closeModal()"
    />
    <div class="flex justify-center">
      <div :class="modalDialogWrapperClasses">
        <div
          class="py-3 md:py-5 px-[10px] md:px-[30px] flex justify-center flex-wrap text-xl font-semibold leading-normal"
        >
          <slot name="header" />
          <!-- <button
            class="absolute right-[30px] top-[25px] w-6 h-6 bg-transparent rounded-none items-center cursor-pointer"
            @click="closeModal()"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5L5 15"
                stroke="#AAAAAA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 5L15 15"
                stroke="#AAAAAA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button> -->
        </div>

        <div
          :class="[
            'pt-0 pb-10px py-[30px]',
            {
              'pb-0': !isButtonsSlotExist,
            },
          ]"
        >
          <slot name="body" />
        </div>
        <div v-if="isButtonsSlotExist" class="px-[30px] flex justify-center">
          <slot name="buttons" />
        </div>
      </div>
    </div>
  </div>
</template>
