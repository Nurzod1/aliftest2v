<script lang="ts" setup></script>
<template>
  <div class="container text-neutral-200 my-10">
    <form>
      <div
        class="flex justify-center flex-col items-center lg:items-start lg:flex-row gap-8 lg:gap-16"
      >
        <div class="flex flex-col items-center">
          <div
            class="overflow-hidden w-[310px] lg:w-[390px] lg:h-[252px] max-w-[390px] rounded-xl"
          >
            <img
              class="max-w-full max-h-full"
              src="@/assets/img/Rectangle.png"
            />
          </div>
          <div class="flex mt-4">
            <label class="relative inline-block">
              <input
                type="file"
                name="file"
                class="absolute z-[-1] opacity-0 block"
              />
              <span class="input-file-text mr-5">Загрузить изображение</span>
              <span
                class="relative inline-block bg-neutral-700 outline-none filter-form__select py-1.5 px-2.5 rounded cursor-pointer"
                >Выберите файл
              </span>
            </label>
            <!-- <button class="btn btn-primary btn-block">Загрузить</button> -->
          </div>
        </div>
        <div class="flex flex-col gap-3 w-full lg:max-w-[430px]">
          <input
            class="outline-none bg-neutral-800 h-10 w-full lg:w-[430px] rounded-lg border border-black border-solid placeholder-gray-600 px-5 transition-all ease-in focus:border-neutral-700"
            type="text"
            placeholder="Введите название"
          />
          <div class="flex items-center">
            <input
              class="outline-none bg-neutral-800 h-10 w-full lg:w-[390px] rounded-l-lg border border-r-[0px] border-black border-solid placeholder-gray-600 px-5 transition-all ease-in focus:border-neutral-700"
              type="text"
              placeholder="Введите ингредиент"
            />
            <button
              class="flex justify-center items-center bg-violet-900 h-10 w-10 btn-block rounded-r-lg border border-black border-solid"
            >
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9306 6.34209L8.59865 10.674L6.11618 8.19156L5.28027 9.02747L8.59865 12.3458L13.7665 7.178L12.9306 6.34209Z"
                  fill="#F2F2F2"
                />
              </svg>
            </button>
          </div>
          <div class="block">
            <div class="inline-flex m-1">
              <span
                class="flex items-center text-xs h-[38px] bg-neutral-800 border border-r-[0px] border-black border-solid px-2 rounded-l-lg"
              >
                Куриное яйцо
              </span>
              <button
                class="flex justify-center items-center btn bg-neutral-900 text-neutral-500 h-[38px] w-10 btn-block rounded-r-lg border border-black border-solid transition-all ease-in hover:text-white"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7021 9.98547H13.3716V15.5073H14.7021V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M11.9624 9.98547H10.6318V15.5073H11.9624V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M18.978 7.16712C18.9754 7.03061 18.9295 6.89846 18.8469 6.78975C18.7642 6.68104 18.6492 6.6014 18.5184 6.56232C18.4596 6.53782 18.3974 6.52252 18.3339 6.51696H14.7868C14.6525 6.07791 14.3808 5.69355 14.0117 5.42047C13.6426 5.14739 13.1956 5 12.7365 5C12.2774 5 11.8304 5.14739 11.4613 5.42047C11.0922 5.69355 10.8205 6.07791 10.6862 6.51696H7.13911C7.08068 6.51814 7.02269 6.52729 6.96674 6.54418H6.95162C6.81318 6.58701 6.69334 6.67547 6.61163 6.79515C6.52992 6.91483 6.49117 7.05866 6.50169 7.20319C6.51222 7.34771 6.5714 7.48441 6.66958 7.59099C6.76776 7.69757 6.89916 7.76774 7.04234 7.79006L7.75298 17.5334C7.76382 17.9127 7.91693 18.2741 8.18191 18.5458C8.44688 18.8175 8.80435 18.9797 9.18332 19H16.2867C16.6662 18.9804 17.0244 18.8186 17.29 18.5468C17.5556 18.2751 17.7092 17.9132 17.72 17.5334L18.4277 7.79914C18.5802 7.77797 18.72 7.70232 18.8212 7.58615C18.9223 7.46999 18.978 7.32116 18.978 7.16712ZM12.7365 6.21456C12.8661 6.21458 12.9943 6.24146 13.1129 6.29351C13.2316 6.34556 13.3382 6.42164 13.426 6.51696H12.047C12.1346 6.42135 12.2411 6.34507 12.3599 6.29299C12.4786 6.24092 12.6069 6.21421 12.7365 6.21456ZM16.2867 17.7904H9.18332C9.10168 17.7904 8.97467 17.6573 8.95955 17.4457L8.25798 7.81123H17.215L16.5135 17.4457C16.4984 17.6573 16.3714 17.7904 16.2867 17.7904Z"
                    fill="#808080"
                    class="fill-current"
                  />
                </svg>
              </button>
            </div>
            <div class="inline-flex m-1">
              <span
                class="flex items-center text-xs h-[38px] bg-neutral-800 border border-r-[0px] border-black border-solid px-2 rounded-l-lg"
              >
                Соль
              </span>
              <button
                class="flex justify-center items-center btn bg-neutral-900 text-neutral-500 h-[38px] w-10 btn-block rounded-r-lg border border-black border-solid transition-all ease-in hover:text-white"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7021 9.98547H13.3716V15.5073H14.7021V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M11.9624 9.98547H10.6318V15.5073H11.9624V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M18.978 7.16712C18.9754 7.03061 18.9295 6.89846 18.8469 6.78975C18.7642 6.68104 18.6492 6.6014 18.5184 6.56232C18.4596 6.53782 18.3974 6.52252 18.3339 6.51696H14.7868C14.6525 6.07791 14.3808 5.69355 14.0117 5.42047C13.6426 5.14739 13.1956 5 12.7365 5C12.2774 5 11.8304 5.14739 11.4613 5.42047C11.0922 5.69355 10.8205 6.07791 10.6862 6.51696H7.13911C7.08068 6.51814 7.02269 6.52729 6.96674 6.54418H6.95162C6.81318 6.58701 6.69334 6.67547 6.61163 6.79515C6.52992 6.91483 6.49117 7.05866 6.50169 7.20319C6.51222 7.34771 6.5714 7.48441 6.66958 7.59099C6.76776 7.69757 6.89916 7.76774 7.04234 7.79006L7.75298 17.5334C7.76382 17.9127 7.91693 18.2741 8.18191 18.5458C8.44688 18.8175 8.80435 18.9797 9.18332 19H16.2867C16.6662 18.9804 17.0244 18.8186 17.29 18.5468C17.5556 18.2751 17.7092 17.9132 17.72 17.5334L18.4277 7.79914C18.5802 7.77797 18.72 7.70232 18.8212 7.58615C18.9223 7.46999 18.978 7.32116 18.978 7.16712ZM12.7365 6.21456C12.8661 6.21458 12.9943 6.24146 13.1129 6.29351C13.2316 6.34556 13.3382 6.42164 13.426 6.51696H12.047C12.1346 6.42135 12.2411 6.34507 12.3599 6.29299C12.4786 6.24092 12.6069 6.21421 12.7365 6.21456ZM16.2867 17.7904H9.18332C9.10168 17.7904 8.97467 17.6573 8.95955 17.4457L8.25798 7.81123H17.215L16.5135 17.4457C16.4984 17.6573 16.3714 17.7904 16.2867 17.7904Z"
                    fill="#808080"
                    class="fill-current"
                  />
                </svg>
              </button>
            </div>
            <div class="inline-flex m-1">
              <span
                class="flex items-center text-xs h-[38px] bg-neutral-800 border border-r-[0px] border-black border-solid px-2 rounded-l-lg"
              >
                Соль
              </span>
              <button
                class="flex justify-center items-center btn bg-neutral-900 text-neutral-500 h-[38px] w-10 btn-block rounded-r-lg border border-black border-solid transition-all ease-in hover:text-white"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7021 9.98547H13.3716V15.5073H14.7021V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M11.9624 9.98547H10.6318V15.5073H11.9624V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M18.978 7.16712C18.9754 7.03061 18.9295 6.89846 18.8469 6.78975C18.7642 6.68104 18.6492 6.6014 18.5184 6.56232C18.4596 6.53782 18.3974 6.52252 18.3339 6.51696H14.7868C14.6525 6.07791 14.3808 5.69355 14.0117 5.42047C13.6426 5.14739 13.1956 5 12.7365 5C12.2774 5 11.8304 5.14739 11.4613 5.42047C11.0922 5.69355 10.8205 6.07791 10.6862 6.51696H7.13911C7.08068 6.51814 7.02269 6.52729 6.96674 6.54418H6.95162C6.81318 6.58701 6.69334 6.67547 6.61163 6.79515C6.52992 6.91483 6.49117 7.05866 6.50169 7.20319C6.51222 7.34771 6.5714 7.48441 6.66958 7.59099C6.76776 7.69757 6.89916 7.76774 7.04234 7.79006L7.75298 17.5334C7.76382 17.9127 7.91693 18.2741 8.18191 18.5458C8.44688 18.8175 8.80435 18.9797 9.18332 19H16.2867C16.6662 18.9804 17.0244 18.8186 17.29 18.5468C17.5556 18.2751 17.7092 17.9132 17.72 17.5334L18.4277 7.79914C18.5802 7.77797 18.72 7.70232 18.8212 7.58615C18.9223 7.46999 18.978 7.32116 18.978 7.16712ZM12.7365 6.21456C12.8661 6.21458 12.9943 6.24146 13.1129 6.29351C13.2316 6.34556 13.3382 6.42164 13.426 6.51696H12.047C12.1346 6.42135 12.2411 6.34507 12.3599 6.29299C12.4786 6.24092 12.6069 6.21421 12.7365 6.21456ZM16.2867 17.7904H9.18332C9.10168 17.7904 8.97467 17.6573 8.95955 17.4457L8.25798 7.81123H17.215L16.5135 17.4457C16.4984 17.6573 16.3714 17.7904 16.2867 17.7904Z"
                    fill="#808080"
                    class="fill-current"
                  />
                </svg>
              </button>
            </div>
            <div class="inline-flex m-1">
              <span
                class="flex items-center text-xs h-[38px] bg-neutral-800 border border-r-[0px] border-black border-solid px-2 rounded-l-lg"
              >
                Соль
              </span>
              <button
                class="flex justify-center items-center btn bg-neutral-900 text-neutral-500 h-[38px] w-10 btn-block rounded-r-lg border border-black border-solid transition-all ease-in hover:text-white"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7021 9.98547H13.3716V15.5073H14.7021V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M11.9624 9.98547H10.6318V15.5073H11.9624V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M18.978 7.16712C18.9754 7.03061 18.9295 6.89846 18.8469 6.78975C18.7642 6.68104 18.6492 6.6014 18.5184 6.56232C18.4596 6.53782 18.3974 6.52252 18.3339 6.51696H14.7868C14.6525 6.07791 14.3808 5.69355 14.0117 5.42047C13.6426 5.14739 13.1956 5 12.7365 5C12.2774 5 11.8304 5.14739 11.4613 5.42047C11.0922 5.69355 10.8205 6.07791 10.6862 6.51696H7.13911C7.08068 6.51814 7.02269 6.52729 6.96674 6.54418H6.95162C6.81318 6.58701 6.69334 6.67547 6.61163 6.79515C6.52992 6.91483 6.49117 7.05866 6.50169 7.20319C6.51222 7.34771 6.5714 7.48441 6.66958 7.59099C6.76776 7.69757 6.89916 7.76774 7.04234 7.79006L7.75298 17.5334C7.76382 17.9127 7.91693 18.2741 8.18191 18.5458C8.44688 18.8175 8.80435 18.9797 9.18332 19H16.2867C16.6662 18.9804 17.0244 18.8186 17.29 18.5468C17.5556 18.2751 17.7092 17.9132 17.72 17.5334L18.4277 7.79914C18.5802 7.77797 18.72 7.70232 18.8212 7.58615C18.9223 7.46999 18.978 7.32116 18.978 7.16712ZM12.7365 6.21456C12.8661 6.21458 12.9943 6.24146 13.1129 6.29351C13.2316 6.34556 13.3382 6.42164 13.426 6.51696H12.047C12.1346 6.42135 12.2411 6.34507 12.3599 6.29299C12.4786 6.24092 12.6069 6.21421 12.7365 6.21456ZM16.2867 17.7904H9.18332C9.10168 17.7904 8.97467 17.6573 8.95955 17.4457L8.25798 7.81123H17.215L16.5135 17.4457C16.4984 17.6573 16.3714 17.7904 16.2867 17.7904Z"
                    fill="#808080"
                    class="fill-current"
                  />
                </svg>
              </button>
            </div>
            <div class="inline-flex m-1">
              <span
                class="flex items-center text-xs h-[38px] bg-neutral-800 border border-r-[0px] border-black border-solid px-2 rounded-l-lg"
              >
                Соль
              </span>
              <button
                class="flex justify-center items-center btn bg-neutral-900 text-neutral-500 h-[38px] w-10 btn-block rounded-r-lg border border-black border-solid transition-all ease-in hover:text-white"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7021 9.98547H13.3716V15.5073H14.7021V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M11.9624 9.98547H10.6318V15.5073H11.9624V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M18.978 7.16712C18.9754 7.03061 18.9295 6.89846 18.8469 6.78975C18.7642 6.68104 18.6492 6.6014 18.5184 6.56232C18.4596 6.53782 18.3974 6.52252 18.3339 6.51696H14.7868C14.6525 6.07791 14.3808 5.69355 14.0117 5.42047C13.6426 5.14739 13.1956 5 12.7365 5C12.2774 5 11.8304 5.14739 11.4613 5.42047C11.0922 5.69355 10.8205 6.07791 10.6862 6.51696H7.13911C7.08068 6.51814 7.02269 6.52729 6.96674 6.54418H6.95162C6.81318 6.58701 6.69334 6.67547 6.61163 6.79515C6.52992 6.91483 6.49117 7.05866 6.50169 7.20319C6.51222 7.34771 6.5714 7.48441 6.66958 7.59099C6.76776 7.69757 6.89916 7.76774 7.04234 7.79006L7.75298 17.5334C7.76382 17.9127 7.91693 18.2741 8.18191 18.5458C8.44688 18.8175 8.80435 18.9797 9.18332 19H16.2867C16.6662 18.9804 17.0244 18.8186 17.29 18.5468C17.5556 18.2751 17.7092 17.9132 17.72 17.5334L18.4277 7.79914C18.5802 7.77797 18.72 7.70232 18.8212 7.58615C18.9223 7.46999 18.978 7.32116 18.978 7.16712ZM12.7365 6.21456C12.8661 6.21458 12.9943 6.24146 13.1129 6.29351C13.2316 6.34556 13.3382 6.42164 13.426 6.51696H12.047C12.1346 6.42135 12.2411 6.34507 12.3599 6.29299C12.4786 6.24092 12.6069 6.21421 12.7365 6.21456ZM16.2867 17.7904H9.18332C9.10168 17.7904 8.97467 17.6573 8.95955 17.4457L8.25798 7.81123H17.215L16.5135 17.4457C16.4984 17.6573 16.3714 17.7904 16.2867 17.7904Z"
                    fill="#808080"
                    class="fill-current"
                  />
                </svg>
              </button>
            </div>
            <div class="inline-flex m-1">
              <span
                class="flex items-center text-xs h-[38px] bg-neutral-800 border border-r-[0px] border-black border-solid px-2 rounded-l-lg"
              >
                Соль
              </span>
              <button
                class="flex justify-center items-center btn bg-neutral-900 text-neutral-500 h-[38px] w-10 btn-block rounded-r-lg border border-black border-solid transition-all ease-in hover:text-white"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7021 9.98547H13.3716V15.5073H14.7021V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M11.9624 9.98547H10.6318V15.5073H11.9624V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M18.978 7.16712C18.9754 7.03061 18.9295 6.89846 18.8469 6.78975C18.7642 6.68104 18.6492 6.6014 18.5184 6.56232C18.4596 6.53782 18.3974 6.52252 18.3339 6.51696H14.7868C14.6525 6.07791 14.3808 5.69355 14.0117 5.42047C13.6426 5.14739 13.1956 5 12.7365 5C12.2774 5 11.8304 5.14739 11.4613 5.42047C11.0922 5.69355 10.8205 6.07791 10.6862 6.51696H7.13911C7.08068 6.51814 7.02269 6.52729 6.96674 6.54418H6.95162C6.81318 6.58701 6.69334 6.67547 6.61163 6.79515C6.52992 6.91483 6.49117 7.05866 6.50169 7.20319C6.51222 7.34771 6.5714 7.48441 6.66958 7.59099C6.76776 7.69757 6.89916 7.76774 7.04234 7.79006L7.75298 17.5334C7.76382 17.9127 7.91693 18.2741 8.18191 18.5458C8.44688 18.8175 8.80435 18.9797 9.18332 19H16.2867C16.6662 18.9804 17.0244 18.8186 17.29 18.5468C17.5556 18.2751 17.7092 17.9132 17.72 17.5334L18.4277 7.79914C18.5802 7.77797 18.72 7.70232 18.8212 7.58615C18.9223 7.46999 18.978 7.32116 18.978 7.16712ZM12.7365 6.21456C12.8661 6.21458 12.9943 6.24146 13.1129 6.29351C13.2316 6.34556 13.3382 6.42164 13.426 6.51696H12.047C12.1346 6.42135 12.2411 6.34507 12.3599 6.29299C12.4786 6.24092 12.6069 6.21421 12.7365 6.21456ZM16.2867 17.7904H9.18332C9.10168 17.7904 8.97467 17.6573 8.95955 17.4457L8.25798 7.81123H17.215L16.5135 17.4457C16.4984 17.6573 16.3714 17.7904 16.2867 17.7904Z"
                    fill="#808080"
                    class="fill-current"
                  />
                </svg>
              </button>
            </div>
            <div class="inline-flex m-1">
              <span
                class="flex items-center text-xs h-[38px] bg-neutral-800 border border-r-[0px] border-black border-solid px-2 rounded-l-lg"
              >
                Сахар
              </span>
              <button
                class="flex justify-center items-center btn bg-neutral-900 text-neutral-500 h-[38px] w-10 btn-block rounded-r-lg border border-black border-solid transition-all ease-in hover:text-white"
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7021 9.98547H13.3716V15.5073H14.7021V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M11.9624 9.98547H10.6318V15.5073H11.9624V9.98547Z"
                    fill="#808080"
                    class="fill-current"
                  />
                  <path
                    d="M18.978 7.16712C18.9754 7.03061 18.9295 6.89846 18.8469 6.78975C18.7642 6.68104 18.6492 6.6014 18.5184 6.56232C18.4596 6.53782 18.3974 6.52252 18.3339 6.51696H14.7868C14.6525 6.07791 14.3808 5.69355 14.0117 5.42047C13.6426 5.14739 13.1956 5 12.7365 5C12.2774 5 11.8304 5.14739 11.4613 5.42047C11.0922 5.69355 10.8205 6.07791 10.6862 6.51696H7.13911C7.08068 6.51814 7.02269 6.52729 6.96674 6.54418H6.95162C6.81318 6.58701 6.69334 6.67547 6.61163 6.79515C6.52992 6.91483 6.49117 7.05866 6.50169 7.20319C6.51222 7.34771 6.5714 7.48441 6.66958 7.59099C6.76776 7.69757 6.89916 7.76774 7.04234 7.79006L7.75298 17.5334C7.76382 17.9127 7.91693 18.2741 8.18191 18.5458C8.44688 18.8175 8.80435 18.9797 9.18332 19H16.2867C16.6662 18.9804 17.0244 18.8186 17.29 18.5468C17.5556 18.2751 17.7092 17.9132 17.72 17.5334L18.4277 7.79914C18.5802 7.77797 18.72 7.70232 18.8212 7.58615C18.9223 7.46999 18.978 7.32116 18.978 7.16712ZM12.7365 6.21456C12.8661 6.21458 12.9943 6.24146 13.1129 6.29351C13.2316 6.34556 13.3382 6.42164 13.426 6.51696H12.047C12.1346 6.42135 12.2411 6.34507 12.3599 6.29299C12.4786 6.24092 12.6069 6.21421 12.7365 6.21456ZM16.2867 17.7904H9.18332C9.10168 17.7904 8.97467 17.6573 8.95955 17.4457L8.25798 7.81123H17.215L16.5135 17.4457C16.4984 17.6573 16.3714 17.7904 16.2867 17.7904Z"
                    fill="#808080"
                    class="fill-current"
                  />
                </svg>
              </button>
            </div>
          </div>
          <textarea
            class="outline-none bg-neutral-800 h-[105px] w-full lg:w-[430px] rounded-lg border border-black border-solid placeholder-gray-600 px-4 py-1 transition-all ease-in focus:border-neutral-700"
            placeholder="Введите описание"
          ></textarea>
          <div class="flex items-center gap-5">
            <p class="font-bold">Время приготовления</p>
            <select
              class="bg-neutral-800 outline-none filter-form__select py-1.5 px-2.5 rounded cursor-pointer"
            >
              <option>5 минут</option>
              <option>10 минут</option>
              <option>15 минут</option>
              <option>20 минут</option>
              <option>30 минут</option>
              <option>35 минут</option>
            </select>
          </div>
          <button
            class="bg-sky-700 w-full h-10 md:h-14 rounded-lg border border-black border-solid transition-all ease-in hover:bg-sky-600"
          >
            Создать рецепт
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
