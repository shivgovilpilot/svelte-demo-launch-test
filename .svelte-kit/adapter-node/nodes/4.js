import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/4.ed9a4fc5.js","_app/immutable/chunks/index.fb970b68.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.b745c4b2.js","_app/immutable/chunks/index.562a36d8.js"];
export const stylesheets = ["_app/immutable/assets/4.9d501049.css"];
export const fonts = [];
