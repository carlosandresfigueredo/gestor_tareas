
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/gestor_tareas_angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/gestor_tareas_angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3131, hash: '91952c0b268e7c43102cc523edc208829be7cefc9039d8e24fbf0bc95d7d0363', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3339, hash: '22a313547496bc36be23b179e6d36e14d29b4bbb393e0551e05ca3f36343a122', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9226, hash: '0a8b94f89e6b86e3c1241180b5b65256d58bf0921b69290876b98c2825d9420d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PH5QZW6A.css': {size: 186, hash: '08ViHY/xP6M', text: () => import('./assets-chunks/styles-PH5QZW6A_css.mjs').then(m => m.default)}
  },
};
