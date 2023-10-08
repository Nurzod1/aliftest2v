/* eslint-disable */
declare module '@intlify/unplugin-vue-i18n/messages';
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
