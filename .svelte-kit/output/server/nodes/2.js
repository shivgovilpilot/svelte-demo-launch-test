import * as universal from '../entries/pages/_page.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.172b8162.js","_app/immutable/chunks/index.fb970b68.js","_app/immutable/chunks/index.562a36d8.js"];
export const stylesheets = ["_app/immutable/assets/2.265a38f0.css"];
export const fonts = [];
