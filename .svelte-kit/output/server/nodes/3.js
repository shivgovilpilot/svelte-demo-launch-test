import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.db98dfec.js","_app/immutable/chunks/environment.9aa685ef.js","_app/immutable/chunks/index.fb970b68.js"];
export const stylesheets = [];
export const fonts = [];
