export default {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  mounted: function (el, binding, vnode) {
    console.log(el, vnode, binding);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his children
      if (!(el == event.target || el.contains(event.target))) {
        console.log("event", event);
        // and if it did, call method provided in attribute value
        binding.value(event);
      }
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  unmounted: function (el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
};
