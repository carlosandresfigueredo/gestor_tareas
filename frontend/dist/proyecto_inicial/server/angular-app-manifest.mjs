
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/gestor_tareas/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/gestor_tareas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3123, hash: 'd8901bd1177fb5ea8562f51f6ed034ec9bdbb136965cb8d487761dce56c4f278', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 3331, hash: '54a71971f548644b785b9cb9a9139b858fc797d227fe3050e1a0714014dec6f2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9218, hash: '93df038bff2c1ef8f356d86c7a3f146cfc516e3c6caad29baa94b50273bd8abe', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-PH5QZW6A.css': {size: 186, hash: '08ViHY/xP6M', text: () => import('./assets-chunks/styles-PH5QZW6A_css.mjs').then(m => m.default)}
  },
};
