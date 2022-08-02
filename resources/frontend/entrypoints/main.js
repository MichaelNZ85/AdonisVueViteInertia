import {createApp, h} from 'vue';
import {createInertiaApp, Head, Link} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from "@inertiajs/progress";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

export function resolvePageComponent(name, pages) {
  for (const path in pages) {
    if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
      return typeof pages[path] === 'function'
        ? pages[path]()
        : pages[path]
    }
  }

  throw new Error(`Page not found: ${name}`)
}

createInertiaApp({
  resolve(name) {
    return resolvePageComponent(name, import.meta.glob("../Pages/**/*.vue"))
  },
  setup({el, App, props, plugin}) {
    createApp({ render: () => h(App, props)})
      .use(plugin)
      .use(ElementPlus)
      .component('InertiaHead', Head)
      .component('InertiaLink', Link)
      .mount(el)
  }
})

InertiaProgress.init();
