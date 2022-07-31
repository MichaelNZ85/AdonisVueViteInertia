import {createApp, h} from 'vue';
import {createInertiaApp, Head, Link} from '@inertiajs/inertia-vue3';
import {InertiaProgress} from "@inertiajs/progress";

createInertiaApp({
  resolve: name => import(`../Pages/${name}.vue`),
  setup({el, App, props, plugin}) {
    createApp({ render: () => h(App, props)})
      .use(plugin)
      .component('InertiaHead', Head)
      .component('InertiaLink', Link)
      .mount(el)
  }
})

InertiaProgress.init();
