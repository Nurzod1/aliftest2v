import clickOutside from "./click-outside";

export default {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  install(Vue) {
    console.log("vue", Vue);
    Vue.directive("click-outside", clickOutside);
  },
};
